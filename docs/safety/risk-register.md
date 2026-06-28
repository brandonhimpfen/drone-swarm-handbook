# Risk Register

Use this template to document risks.

| ID | Risk | Category | Likelihood | Impact | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Unclear mission constraints | Safety | Medium | High | Require scenario constraint checklist | Maintainer | Open |
| R-002 | Poor telemetry coverage | Observability | Medium | Medium | Require telemetry schema validation | Maintainer | Open |
| R-003 | Unsafe interpretation of docs | Governance | Low | High | Maintain safety boundaries and review contributions | Maintainer | Open |
| R-004 | Privacy-sensitive data in examples | Privacy | Low | Medium | Use synthetic data only | Maintainer | Open |

## Risk categories

- Safety
- Privacy
- Security
- Reliability
- Governance
- Documentation quality
- Misuse potential

## Review cadence

Review the risk register when:

- Adding a new application section
- Adding examples
- Changing safety boundaries
- Introducing protocol-specific content
- Publishing a release
