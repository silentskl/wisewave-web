"use client";

import { useEffect, useState } from "react";

type Lang = "zh" | "en";
type ModelCatalogEntry = {
  name: string;
  enabled?: boolean;
  order?: number;
};

const copy = {
  zh: {
    nav: ["产品服务", "解决方案", "关于我们", "联系我们"],
    eyebrow: "GLOBAL DIGITAL INFRASTRUCTURE",
    title: "连接全球，驱动下一代数字体验",
    lead:
      "WiseWave 将 AI 大模型、云基础设施、全球内容分发、专线连接与应用安全整合为一体，为企业提供更快、更稳、更安全的数字底座。",
    consult: "咨询解决方案",
    explore: "探索产品能力",
    metrics: [
      ["200+", "全球节点"],
      ["99.99%", "服务可用性"],
      ["24×7", "技术支持"],
    ],
    marketKicker: "ONE API · MULTI-MODEL · UNIFIED BILLING",
    marketTitle: "一个接口，连接全球主流大模型",
    marketText:
      "模型生态快速扩张，但多平台账户、不同接口规范、分散账单与重复开发正在增加接入成本。WiseWave AI Hub 以统一兼容接口聚合多模型 Token，让团队一次接入、灵活调用。",
    modelNote: "可用模型与版本以平台实时供应为准",
    models: ["Seedance 2.0", "Kimi K3", "Claude", "Qwen3"],
    valueItems: [
      ["01", "统一接入", "一套 API 对接文本、推理、视觉与视频生成模型，降低迁移与维护成本。"],
      ["02", "灵活选模", "按任务、质量、速度与预算选择模型，为不同工作负载匹配合适能力。"],
      ["03", "用量可视", "集中管理 Token、调用记录与消费数据，让成本分配更清晰。"],
      ["04", "性价比优先", "通过聚合供应与统一结算，帮助企业减少多平台采购和管理开销。"],
    ],
    serviceTitle: "从模型到边缘的一体化能力",
    serviceLead: "围绕企业全球化业务，提供可组合、可扩展的数字基础设施服务。",
    learn: "查看能力",
    services: [
      {
        code: "AI",
        title: "AI 大模型融合平台",
        subtitle: "统一 Token 与接口",
        summary: "通过一个兼容接口接入多家主流模型，简化集成、切换、用量管理与结算。",
        tags: ["统一 API", "多模型接入", "Token 管理"],
      },
      {
        code: "CDN",
        title: "内容分发网络",
        subtitle: "全球静态与动态加速",
        summary: "智能调度用户请求至优选边缘节点，降低访问延迟、回源压力与跨区域波动。",
        tags: ["智能路由", "缓存优化", "实时监控"],
      },
      {
        code: "CLOUD",
        title: "云基础设施",
        subtitle: "弹性、混合与多云",
        summary: "覆盖计算、存储、数据库和容器化环境，支持迁移、扩容与持续运维。",
        tags: ["弹性计算", "混合云", "托管运维"],
      },
      {
        code: "LINK",
        title: "专线与云连接",
        subtitle: "稳定的私有连接",
        summary: "连接数据中心、办公室与多云环境，为关键业务提供可预测的带宽和时延。",
        tags: ["点对点专线", "云直连", "冗余路径"],
      },
      {
        code: "SCDN",
        title: "安全 CDN",
        subtitle: "加速与防护融合",
        summary: "在边缘集成 WAF、DDoS 缓解、Bot 管理与 API 防护，让合法流量快速抵达源站。",
        tags: ["WAF", "DDoS 防护", "API 安全"],
      },
    ],
    detailLabel: "服务能力",
    detailMarket: "市场概况",
    detailCapability: "产品能力",
    detailAdvantages: "优势与特点",
    tryNow: "立即体验",
    serviceDetails: [
      {
        id: "ai",
        code: "01 / AI MODEL HUB",
        title: "AI 大模型融合平台",
        market:
          "企业正在同时使用文本生成、复杂推理、代码、视觉和视频模型。逐家开户、重复对接与分散充值不仅拖慢上线速度，也让预算和权限难以统一管理。",
        capability:
          "WiseWave 以类似 OpenRouter 的聚合模式提供统一 Token 平台和兼容接口。一次完成开发接入，即可按业务需要调用 Seedance 2.0、Kimi K3、Claude、Qwen3 等模型，并在统一入口查看请求与用量。",
        points: ["一套接口访问多家模型", "统一 Token、账户与消费管理", "支持按场景灵活选择模型", "减少重复开发和多平台采购成本"],
        accent: "AI",
      },
      {
        id: "cdn",
        code: "02 / CONTENT DELIVERY",
        title: "内容分发网络（CDN）",
        market:
          "全球用户对网页、下载、直播与应用响应速度的要求持续提高。跨运营商、跨区域链路容易出现高延迟、抖动和回源拥塞，直接影响体验与转化。",
        capability:
          "通过分布式边缘节点、缓存策略与实时链路调度，将静态与动态内容从更靠近用户的位置交付，同时降低源站压力并提升突发流量承载能力。",
        points: ["静态、动态与大文件加速", "智能路由与链路优化", "缓存预热、刷新与回源控制", "实时性能与流量可视化"],
        accent: "CDN",
      },
      {
        id: "cloud",
        code: "03 / CLOUD INFRASTRUCTURE",
        title: "云基础设施",
        market:
          "业务扩张带来资源波动、多云复杂度与运维压力。企业需要在性能、成本、数据位置和可扩展性之间持续取得平衡。",
        capability:
          "围绕计算、存储、数据库、容器和网络构建可扩展架构，支持公有云、私有云与混合云环境，并提供迁移、部署、监控和持续优化服务。",
        points: ["弹性计算与对象存储", "容器化和 Kubernetes 架构", "多云与混合云整合", "迁移评估与托管运维"],
        accent: "CLOUD",
      },
      {
        id: "link",
        code: "04 / PRIVATE CONNECTIVITY",
        title: "专线与云连接",
        market:
          "关键系统如果完全依赖公共互联网，容易受到路由变化、拥塞与跨境链路质量波动影响。实时业务与混合云环境需要更可预测的连接。",
        capability:
          "为办公室、数据中心、边缘节点与主流云环境建立专用连接，根据覆盖、带宽、时延和冗余要求设计端到端网络方案。",
        points: ["点对点与跨区域专线", "多云和数据中心互联", "主备路径与快速切换", "带宽按业务需求灵活扩展"],
        accent: "LINK",
      },
      {
        id: "scdn",
        code: "05 / SECURE EDGE",
        title: "安全 CDN（SCDN）",
        market:
          "应用攻击、恶意机器人、API 滥用和 DDoS 往往同时发生。把性能与安全拆成多套系统，会增加策略割裂、排障复杂度与响应时间。",
        capability:
          "在边缘节点统一执行内容加速和安全策略，将 WAF、DDoS 缓解、Bot 管理与 API 防护融入请求路径，在流量抵达源站前完成识别与处置。",
        points: ["Web 应用防火墙（WAF）", "网络层与应用层 DDoS 防护", "Bot 识别与访问控制", "API 发现、限速与滥用防护"],
        accent: "SCDN",
      },
    ],
    whyKicker: "WHY WISEWAVE",
    whyTitle: "复杂技术，交付成简单结果",
    whyText:
      "从前期评估、方案设计到上线与持续优化，WiseWave 以单一技术窗口协调模型、云、网络与安全能力。",
    whyItems: [
      ["01", "一站式整合", "减少多供应商接口、合同与支持流程，让架构和采购更简单。"],
      ["02", "面向亚太与全球", "结合区域网络经验与全球资源，为跨境业务设计更适合的交付路径。"],
      ["03", "成本与性能平衡", "根据工作负载选择模型、节点、线路和资源组合，避免为闲置能力买单。"],
      ["04", "持续技术支持", "从接入验证到日常运维提供统一支持，缩短问题定位和沟通链路。"],
    ],
    processTitle: "从需求到上线，四步完成",
    process: [
      ["01", "需求梳理", "确认业务区域、流量、模型、性能、安全与预算目标。"],
      ["02", "方案设计", "组合最合适的模型、云资源、边缘节点和网络路径。"],
      ["03", "接入验证", "完成接口适配、配置、联调和上线前验证。"],
      ["04", "持续优化", "基于使用与性能数据持续调整成本、策略和容量。"],
    ],
    aboutKicker: "ABOUT WISEWAVE",
    aboutTitle: "为全球业务构建可靠的数字底座",
    aboutText:
      "WiseWave Pte. Ltd. 总部位于新加坡，专注于 AI 模型接入、云基础设施、内容分发、网络连接与应用安全。我们希望把分散而复杂的技术能力整合成企业可以快速采用、清晰管理和持续扩展的服务。",
    contactKicker: "START A CONVERSATION",
    contactTitle: "告诉我们你的业务目标",
    contactText: "无论是接入多个 AI 模型、优化全球访问，还是建设云与专线架构，我们都可以从一次需求沟通开始。",
    emailUs: "发送邮件",
    callUs: "电话咨询",
    addressLabel: "新加坡办公室",
    address: "10 Anson Road, #13-09, International Plaza, Singapore 079903",
    legal: ["隐私政策", "服务条款"],
    footerText: "AI、云、网络与安全的一体化数字基础设施伙伴。",
    rights: "© 2026 WiseWave Pte. Ltd. 保留所有权利。",
  },
  en: {
    nav: ["Services", "Solutions", "About", "Contact"],
    eyebrow: "GLOBAL DIGITAL INFRASTRUCTURE",
    title: "Connect globally. Power the next digital experience.",
    lead:
      "WiseWave unifies AI models, cloud infrastructure, global content delivery, private connectivity and application security into a faster, more reliable digital foundation.",
    consult: "Talk to an expert",
    explore: "Explore capabilities",
    metrics: [
      ["200+", "Global nodes"],
      ["99.99%", "Service availability"],
      ["24×7", "Technical support"],
    ],
    marketKicker: "ONE API · MULTI-MODEL · UNIFIED BILLING",
    marketTitle: "One interface for leading AI models",
    marketText:
      "The model ecosystem is moving fast, while fragmented accounts, APIs and bills increase integration cost. WiseWave AI Hub aggregates multi-model tokens behind one compatible API, so teams integrate once and stay flexible.",
    modelNote: "Model availability and versions are subject to live platform supply",
    models: ["Seedance 2.0", "Kimi K3", "Claude", "Qwen3"],
    valueItems: [
      ["01", "Unified access", "Use one API for text, reasoning, vision and video models, reducing migration and maintenance work."],
      ["02", "Flexible routing", "Match each workload to the right model based on capability, latency, quality and budget."],
      ["03", "Visible usage", "Manage tokens, request records and spend in one place for clearer cost allocation."],
      ["04", "Value first", "Consolidated supply and billing help reduce the overhead of buying from multiple platforms."],
    ],
    serviceTitle: "One infrastructure layer, from models to the edge",
    serviceLead: "Composable and scalable services for companies operating across markets.",
    learn: "View capabilities",
    services: [
      {
        code: "AI",
        title: "AI Model Hub",
        subtitle: "Unified tokens and API",
        summary: "Access leading model providers through one compatible interface and simplify integration, switching, usage and billing.",
        tags: ["Unified API", "Multi-model", "Token control"],
      },
      {
        code: "CDN",
        title: "Content Delivery Network",
        subtitle: "Static and dynamic acceleration",
        summary: "Route requests to optimized edge nodes to reduce latency, origin load and cross-region instability.",
        tags: ["Smart routing", "Caching", "Monitoring"],
      },
      {
        code: "CLOUD",
        title: "Cloud Infrastructure",
        subtitle: "Elastic, hybrid and multi-cloud",
        summary: "Compute, storage, database and container environments with migration, scaling and managed operations.",
        tags: ["Elastic compute", "Hybrid cloud", "Managed ops"],
      },
      {
        code: "LINK",
        title: "Private Connectivity",
        subtitle: "Predictable private paths",
        summary: "Connect offices, data centres and multiple clouds with predictable bandwidth and latency for critical workloads.",
        tags: ["Point-to-point", "Cloud connect", "Redundancy"],
      },
      {
        code: "SCDN",
        title: "Secure CDN",
        subtitle: "Acceleration meets protection",
        summary: "Combine WAF, DDoS mitigation, bot management and API protection at the edge.",
        tags: ["WAF", "DDoS defence", "API security"],
      },
    ],
    detailLabel: "SERVICE CAPABILITIES",
    detailMarket: "Market context",
    detailCapability: "What we deliver",
    detailAdvantages: "Advantages & features",
    tryNow: "Try it now",
    serviceDetails: [
      {
        id: "ai",
        code: "01 / AI MODEL HUB",
        title: "AI Model Aggregation Platform",
        market:
          "Enterprises now use different models for language, reasoning, code, vision and video. Separate accounts, integrations and prepaid balances slow delivery and make access and budget control harder.",
        capability:
          "WiseWave provides an OpenRouter-like token aggregation platform and compatible API. Integrate once, then access models including Seedance 2.0, Kimi K3, Claude and Qwen3 through one entry point with consolidated request and usage visibility.",
        points: ["One API for multiple providers", "Unified tokens, accounts and spend", "Flexible model selection by workload", "Lower integration and procurement overhead"],
        accent: "AI",
      },
      {
        id: "cdn",
        code: "02 / CONTENT DELIVERY",
        title: "Content Delivery Network",
        market:
          "Global audiences expect fast web, download, streaming and application experiences. Cross-region and cross-carrier routes can introduce latency, jitter and origin congestion that directly affect conversion.",
        capability:
          "Distributed edge nodes, caching and real-time route selection deliver static and dynamic content closer to users, reduce origin load and improve resilience during traffic spikes.",
        points: ["Static, dynamic and large-file delivery", "Intelligent routing and path optimization", "Cache prefetch, purge and origin control", "Real-time traffic and performance visibility"],
        accent: "CDN",
      },
      {
        id: "cloud",
        code: "03 / CLOUD INFRASTRUCTURE",
        title: "Cloud Infrastructure",
        market:
          "Business growth creates volatile demand, multi-cloud complexity and operational pressure. Teams must continuously balance performance, cost, data location and scalability.",
        capability:
          "Build scalable compute, storage, database, container and network environments across public, private and hybrid clouds, supported by migration, deployment, monitoring and optimization.",
        points: ["Elastic compute and object storage", "Container and Kubernetes architecture", "Multi-cloud and hybrid integration", "Migration assessment and managed operations"],
        accent: "CLOUD",
      },
      {
        id: "link",
        code: "04 / PRIVATE CONNECTIVITY",
        title: "Private & Cloud Connectivity",
        market:
          "Critical systems that rely entirely on the public internet are exposed to routing changes, congestion and cross-border volatility. Real-time and hybrid-cloud workloads need more predictable paths.",
        capability:
          "Connect offices, data centres, edge locations and leading clouds through dedicated paths designed around coverage, bandwidth, latency and redundancy requirements.",
        points: ["Point-to-point and regional circuits", "Multi-cloud and data-centre interconnect", "Primary/backup paths and failover", "Bandwidth that scales with demand"],
        accent: "LINK",
      },
      {
        id: "scdn",
        code: "05 / SECURE EDGE",
        title: "Secure CDN",
        market:
          "Application attacks, malicious bots, API abuse and DDoS often arrive together. Separating security from delivery creates fragmented policies, complex troubleshooting and slower response.",
        capability:
          "Apply acceleration and security at the edge, combining WAF, DDoS mitigation, bot management and API protection before requests reach the origin.",
        points: ["Web Application Firewall", "Network and application DDoS defence", "Bot identification and access control", "API discovery, rate limits and abuse protection"],
        accent: "SCDN",
      },
    ],
    whyKicker: "WHY WISEWAVE",
    whyTitle: "Complex technology, delivered as a clear outcome",
    whyText:
      "From assessment and architecture to launch and continuous optimization, WiseWave provides one technical point of coordination across models, cloud, networking and security.",
    whyItems: [
      ["01", "One integrated partner", "Reduce fragmented interfaces, contracts and support paths across multiple vendors."],
      ["02", "APAC and global focus", "Combine regional network experience with global resources for cross-border delivery."],
      ["03", "Performance-cost balance", "Choose the right model, node, route and resource mix without paying for idle capacity."],
      ["04", "Continuous support", "One support path from integration testing to daily operations and troubleshooting."],
    ],
    processTitle: "Four steps from requirement to production",
    process: [
      ["01", "Discover", "Define regions, traffic, models, performance, security and budget targets."],
      ["02", "Design", "Combine the right models, cloud resources, edge locations and network paths."],
      ["03", "Validate", "Complete integration, configuration, testing and production-readiness checks."],
      ["04", "Optimize", "Continuously tune cost, policy and capacity using performance and usage data."],
    ],
    aboutKicker: "ABOUT WISEWAVE",
    aboutTitle: "A reliable digital foundation for global business",
    aboutText:
      "Headquartered in Singapore, WiseWave Pte. Ltd. focuses on AI model access, cloud infrastructure, content delivery, network connectivity and application security. We turn fragmented technical capabilities into services enterprises can adopt quickly, manage clearly and scale confidently.",
    contactKicker: "START A CONVERSATION",
    contactTitle: "Tell us what you want to achieve",
    contactText: "Whether you need multi-model AI access, faster global delivery or a new cloud and connectivity architecture, we can start with a focused requirements conversation.",
    emailUs: "Email us",
    callUs: "Call us",
    addressLabel: "Singapore office",
    address: "10 Anson Road, #13-09, International Plaza, Singapore 079903",
    legal: ["Privacy Policy", "Terms of Service"],
    footerText: "An integrated partner for AI, cloud, network and security infrastructure.",
    rights: "© 2026 WiseWave Pte. Ltd. All rights reserved.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const [models, setModels] = useState<string[]>([...copy.zh.models]);
  const [aiPlatformUrl, setAiPlatformUrl] = useState("#service-ai");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/model-catalog.json", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Model catalog unavailable");
        return response.json();
      })
      .then((catalog: { platform_url?: string; models?: ModelCatalogEntry[] }) => {
        const configuredModels = Array.isArray(catalog.models)
          ? catalog.models
              .filter((model) => model && model.enabled !== false && typeof model.name === "string" && model.name.trim())
              .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
              .map((model) => model.name.trim())
          : [];

        if (configuredModels.length > 0) setModels(configuredModels);
        if (
          typeof catalog.platform_url === "string" &&
          (catalog.platform_url.startsWith("https://") || catalog.platform_url.startsWith("http://"))
        ) {
          setAiPlatformUrl(catalog.platform_url);
        }
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
      });

    return () => controller.abort();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand brand-image" href="#top" aria-label="WiseWave home">
          <img
            src="/wisewave-logo-blue.png"
            alt="WiseWave — Intelligent, Fast, Reliable"
          />
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#solutions" onClick={() => setMenuOpen(false)}>{t.nav[1]}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav[2]}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav[3]}</a>
        </nav>
        <button className="lang-toggle" type="button" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
          <span className={lang === "zh" ? "active" : ""}>中</span>
          <i>/</i>
          <span className={lang === "en" ? "active" : ""}>EN</span>
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <img className="hero-globe" src="/wisewave-globe.png" alt="" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">{t.consult}</a>
            <a className="button secondary" href="#services">{t.explore}</a>
          </div>
          <div className="metrics">
            {t.metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="ai-intro" id="solutions">
        <div className="section-shell split-heading">
          <div>
            <p className="section-kicker">{t.marketKicker}</p>
            <h2>{t.marketTitle}</h2>
          </div>
          <p className="section-lead">{t.marketText}</p>
        </div>
        <div className="section-shell model-rail">
          <div className="model-chips">
            {models.map((model, index) => (
              <div className="model-chip" key={model}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{model}</strong>
              </div>
            ))}
          </div>
          <p className="model-note">{t.modelNote}</p>
        </div>
        <div className="section-shell value-grid">
          {t.valueItems.map(([number, title, text]) => (
            <article className="value-card" key={number}>
              <span className="value-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell section-heading">
          <p className="section-kicker">WISEWAVE SERVICE FABRIC</p>
          <h2>{t.serviceTitle}</h2>
          <p>{t.serviceLead}</p>
        </div>
        <div className="section-shell service-grid">
          {t.services.map((service, index) => (
            <article className={index === 0 ? "service-card featured" : "service-card"} key={service.code}>
              <div className="service-code">{service.code}</div>
              <p className="service-subtitle">{service.subtitle}</p>
              <h3>{service.title}</h3>
              <p className="service-summary">{service.summary}</p>
              <div className="tag-list">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a
                href={`#service-${service.code.toLowerCase()}`}
                className="text-link"
              >
                {t.learn}<span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="service-details" aria-label={t.detailLabel}>
        {t.serviceDetails.map((detail, index) => (
          <article className="detail-row section-shell" id={`service-${detail.id}`} key={detail.id}>
            <div className="detail-marker" aria-hidden="true">
              <span>{detail.accent}</span>
              <i>{String(index + 1).padStart(2, "0")}</i>
            </div>
            <div className="detail-main">
              <p className="section-kicker">{detail.code}</p>
              <h2>{detail.title}</h2>
              <div className="detail-copy-grid">
                <div>
                  <h3>{t.detailMarket}</h3>
                  <p>{detail.market}</p>
                </div>
                <div>
                  <h3>{t.detailCapability}</h3>
                  <p>{detail.capability}</p>
                </div>
              </div>
              <h3 className="advantages-title">{t.detailAdvantages}</h3>
              <ul className="advantage-list">
                {detail.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {detail.id === "ai" && aiPlatformUrl.startsWith("http") && (
                <a
                  className="button primary detail-cta"
                  href={aiPlatformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.tryNow}<span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="why">
        <div className="section-shell split-heading">
          <div>
            <p className="section-kicker">{t.whyKicker}</p>
            <h2>{t.whyTitle}</h2>
          </div>
          <p className="section-lead">{t.whyText}</p>
        </div>
        <div className="section-shell why-grid">
          {t.whyItems.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process">
        <div className="section-shell process-layout">
          <h2>{t.processTitle}</h2>
          <div className="process-list">
            {t.process.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-shell about-panel">
          <div>
            <p className="section-kicker">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <p>{t.aboutText}</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit orbit-one" aria-hidden="true" />
        <div className="contact-orbit orbit-two" aria-hidden="true" />
        <div className="section-shell contact-layout">
          <div>
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:info@wisewavesg.com">{t.emailUs}</a>
            <a className="button secondary" href="tel:+6580331679">{t.callUs}</a>
            <dl>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:info@wisewavesg.com">info@wisewavesg.com</a></dd>
              </div>
              <div>
                <dt>{t.addressLabel}</dt>
                <dd>{t.address}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-top">
          <a className="brand brand-image footer-brand" href="#top" aria-label="WiseWave home">
            <img
              src="/wisewave-logo-blue.png"
              alt="WiseWave — Intelligent, Fast, Reliable"
            />
          </a>
          <p>{t.footerText}</p>
          <a href="mailto:info@wisewavesg.com">info@wisewavesg.com</a>
        </div>
        <div className="section-shell footer-bottom">
          <span>{t.rights}</span>
          <div>
            <a href="/privacy">{t.legal[0]}</a>
            <a href="/terms">{t.legal[1]}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
