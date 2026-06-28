import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';

const root = process.cwd();
const ajv = new Ajv({ allErrors: true, strict: false });
const schemaDir = path.join(root, 'schemas');
const exampleDirs = [
  ['mission.schema.json', 'examples/mission-definitions'],
  ['telemetry.schema.json', 'examples/telemetry'],
  ['simulation-config.schema.json', 'examples/simulation-configs']
];

for (const [schemaName, exampleDir] of exampleDirs) {
  const schemaPath = path.join(schemaDir, schemaName);
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const fullExampleDir = path.join(root, exampleDir);
  for (const filename of fs.readdirSync(fullExampleDir)) {
    if (!filename.endsWith('.json')) continue;
    const data = JSON.parse(fs.readFileSync(path.join(fullExampleDir, filename), 'utf8'));
    const ok = validate(data);
    if (!ok) {
      console.error(`${filename} failed ${schemaName}`);
      console.error(validate.errors);
      process.exitCode = 1;
    } else {
      console.log(`${filename} OK`);
    }
  }
}
