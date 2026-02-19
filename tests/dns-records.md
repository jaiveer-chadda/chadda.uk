# DNS Records

## 2026-02-03

> (before I started messing around with cloudflare)

| Type  | Name            | Content                                    | Proxy Status | TTL  | Actions |
| ----- | --------------- | ------------------------------------------ | ------------ | ---- | ------- |
| CNAME | chadda.uk       | default-page.registrar.cloudflare.com      | Proxied      | Auto | Edit >  |
| CNAME | sig1._domainkey | sig1.dkim.chadda.uk.at.icloudmailadmin.com | DNS only     | 1 hr | Edit >  |
| MX    | chadda.uk       | mx02.mail.icloud.com (10)                  | DNS only     | 1 hr | Edit >  |
| MX    | chadda.uk       | mx02.mail.icloud.com (10)                  | DNS only     | 1 hr | Edit >  |
| TXT   | chadda.uk       | "v=spf1 include:icloud.com ~all"           | DNS only     | 1 hr | Edit >  |
| TXT   | chadda.uk       | "apple-domain=iAUS9ZXuOZI9SCdV"            | DNS only     | 1 hr | Edit >  |

