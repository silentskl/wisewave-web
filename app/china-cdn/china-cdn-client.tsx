"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "zh" | "en";

type ProductId = "return-cdn" | "full-shield" | "mobile-resilience";

type CdnConfig = {
  price_factor: number;
  currency: string;
  unit: string;
  billing: string;
  contact_url: string;
  products: Array<{ id: ProductId; base_price: number }>;
};

const fallbackConfig: CdnConfig = {
  price_factor: 1.2,
  currency: "USD",
  unit: "Mbps",
  billing: "月度 95 峰值带宽计费",
  contact_url: "mailto:info@wisewavesg.com?subject=China%20Acceleration%20CDN%20Inquiry",
  products: [
    { id: "return-cdn", base_price: 35 },
    { id: "full-shield", base_price: 45 },
    { id: "mobile-resilience", base_price: 55 },
  ],
};

const copy = {
  zh: {
    home: "返回首页",
    contact: "联系方案顾问",
    eyebrow: "CHINA-BOUND ACCELERATION NETWORK",
    title: "让海外业务，更快、更稳地抵达中国用户",
    lead:
      "WiseWave 中国回国加速 CDN 面向源站位于境外、用户集中在中国大陆的业务，通过 CN2 与中港精品 BGP 路径、边缘缓存和安全清洗，缓解跨境访问中的高延迟、抖动、回源拥塞与攻击风险。",
    heroTags: ["CN2 / 中港精品 BGP", "动静态内容加速", "默认 CC 防护", "2 Tbps Anti-DDoS"],
    contextKicker: "MARKET CONTEXT",
    contextTitle: "跨境访问的瓶颈，不只在距离",
    contextText:
      "海外源站访问中国大陆时，国际出口拥塞、跨运营商绕路、链路抖动和突发攻击会叠加影响首屏、接口与下载体验。单纯增加源站带宽通常无法解决路由质量与应用层攻击问题，因此需要把优质回国线路、边缘分发、智能回源和安全防护统一在同一条交付路径上。",
    capabilities: [
      ["01", "精品回国线路", "采用 CN2 与中港精品 BGP 资源，针对中国电信、联通、移动访问路径进行优化，降低跨境绕路与高峰波动。"],
      ["02", "动静态协同加速", "静态资源在边缘缓存，动态请求通过优选链路回源；支持缓存刷新、预热、HTTPS 与 WebSocket 等常见业务需求。"],
      ["03", "边缘 CC 防护", "安全方案默认在边缘识别异常频率、恶意会话和应用层洪泛，在请求触达源站前完成限速与拦截。"],
      ["04", "2 Tbps 回国 Anti-DDoS", "依托回国线路清洗与调度资源承载大流量攻击，清洗恶意流量后仅将合法请求回送源站。"],
    ],
    productsKicker: "PRODUCT OPTIONS",
    productsTitle: "三种方案，按加速与防护需求选择",
    productsLead: "页面单价已包含当前价格系数，并按月度 95 峰值带宽计费。最终资源、可用区域和防护策略以商务确认及服务协议为准。",
    pricePrefix: "US$",
    per: "/ Mbps",
    displayed: "当前展示系数",
    original: "目录基础单价",
    choose: "咨询此方案",
    popular: "推荐",
    productCopy: {
      "return-cdn": {
        name: "纯回国加速 CDN",
        fit: "适合以访问性能为主、已有应用层防护的业务",
        features: ["CN2 / 中港精品 BGP 回国线路", "静态与动态内容加速", "不启用 CC 防护", "包含 2 Tbps 回国线路 Anti-DDoS 能力", "月度 95 峰值带宽计费"],
      },
      "full-shield": {
        name: "满血回国加速 CDN",
        fit: "适合电商、SaaS、门户与高并发 Web 业务",
        features: ["CN2 / 中港精品 BGP 回国线路", "静态与动态内容加速", "默认开启 CC 防护", "Anti-DDoS 无限防护服务*", "月度 95 峰值带宽计费"],
      },
      "mobile-resilience": {
        name: "防中国移动屏蔽 CDN",
        fit: "适合对中国移动网络可达性要求更高的业务",
        features: ["增强中国移动网络可达性与线路调度", "静态与动态内容加速", "默认开启 CC 防护", "Anti-DDoS 无限防护服务*", "月度 95 峰值带宽计费"],
      },
    },
    flowKicker: "DELIVERY FLOW",
    flowTitle: "从接入到持续优化",
    flow: [
      ["01", "业务评估", "确认用户区域、运营商分布、峰值带宽、源站位置与攻击历史。"],
      ["02", "线路与策略设计", "选择回国节点、缓存规则、动态回源路径以及 CC / DDoS 策略。"],
      ["03", "CNAME 接入验证", "完成域名接入、证书配置、缓存命中、回源和主要运营商访问测试。"],
      ["04", "监控与调优", "根据带宽、命中率、状态码、时延和攻击事件持续调整策略。"],
    ],
    scenariosTitle: "适用业务场景",
    scenarios: ["跨境电商与品牌官网", "面向中国用户的 SaaS", "游戏活动页与下载分发", "媒体、资讯与在线教育", "API 与移动应用后端", "大型营销与突发流量活动"],
    faqTitle: "常见问题",
    faq: [
      ["什么是月度 95 峰值计费？", "通常按固定时间间隔采集带宽样本，月末去除最高 5% 的样本后，以剩余最高值作为计费带宽。具体采样周期与规则以合同为准。"],
      ["接入时需要迁移源站吗？", "通常无需迁移。完成源站与域名配置后，将业务域名 CNAME 指向 WiseWave 提供的接入地址即可开始验证。"],
      ["纯回国加速 CDN 是否包含 CC 防护？", "不包含。它保留 Anti-DDoS 能力，适合已有 WAF / CC 防护或仅需要线路与分发加速的客户。"],
      ["“无限防护”如何理解？", "指相应方案不按单次攻击峰值另行分档计价；实际服务仍受可接受使用政策、资源调度、攻击类型及服务协议约束。"],
    ],
    footer: "WiseWave Pte. Ltd. · AI、云、网络与安全的一体化数字基础设施伙伴。",
  },
  en: {
    home: "Back to home",
    contact: "Talk to an expert",
    eyebrow: "CHINA-BOUND ACCELERATION NETWORK",
    title: "Reach users in China with speed, stability and protection",
    lead:
      "WiseWave China Acceleration CDN is designed for overseas origins serving users in mainland China. Premium CN2 and China–Hong Kong BGP paths, edge caching and traffic scrubbing reduce latency, jitter, origin congestion and attack exposure.",
    heroTags: ["CN2 / premium BGP", "Dynamic & static acceleration", "CC protection", "2 Tbps Anti-DDoS"],
    contextKicker: "MARKET CONTEXT",
    contextTitle: "Cross-border performance is more than distance",
    contextText:
      "International gateway congestion, inefficient carrier routing, jitter and traffic attacks can combine to degrade pages, APIs and downloads. More origin bandwidth alone cannot correct path quality or application-layer abuse. A strong delivery design combines optimized China-bound routes, edge distribution, intelligent origin selection and security controls.",
    capabilities: [
      ["01", "Premium China-bound paths", "CN2 and premium China–Hong Kong BGP resources optimize delivery across major mainland carriers and reduce detours during busy periods."],
      ["02", "Dynamic and static delivery", "Cache static objects at the edge and accelerate dynamic origin requests over selected paths, with purge, prefetch, HTTPS and WebSocket support."],
      ["03", "Edge CC protection", "Protected plans identify abusive request rates, malicious sessions and application floods before traffic reaches the origin."],
      ["04", "2 Tbps Anti-DDoS capacity", "China-bound scrubbing and traffic engineering resources absorb volumetric attacks and forward clean traffic to the origin."],
    ],
    productsKicker: "PRODUCT OPTIONS",
    productsTitle: "Three options for different acceleration and risk profiles",
    productsLead: "Displayed unit prices include the active pricing factor and use monthly 95th-percentile bandwidth billing. Final availability and protection policies are subject to service confirmation and agreement.",
    pricePrefix: "US$",
    per: "/ Mbps",
    displayed: "Active display factor",
    original: "Catalog base price",
    choose: "Ask about this plan",
    popular: "Recommended",
    productCopy: {
      "return-cdn": {
        name: "China Acceleration CDN",
        fit: "For performance-led workloads with existing application security",
        features: ["CN2 / premium China–Hong Kong BGP", "Static and dynamic acceleration", "CC protection not enabled", "2 Tbps China-bound Anti-DDoS capacity", "Monthly 95th-percentile billing"],
      },
      "full-shield": {
        name: "Full-Shield China CDN",
        fit: "For e-commerce, SaaS, portals and high-concurrency web workloads",
        features: ["CN2 / premium China–Hong Kong BGP", "Static and dynamic acceleration", "CC protection enabled by default", "Unlimited Anti-DDoS service*", "Monthly 95th-percentile billing"],
      },
      "mobile-resilience": {
        name: "China Mobile Resilience CDN",
        fit: "For workloads that require stronger reachability on China Mobile",
        features: ["Enhanced China Mobile reachability and routing", "Static and dynamic acceleration", "CC protection enabled by default", "Unlimited Anti-DDoS service*", "Monthly 95th-percentile billing"],
      },
    },
    flowKicker: "DELIVERY FLOW",
    flowTitle: "From onboarding to continuous optimization",
    flow: [
      ["01", "Workload assessment", "Review user regions, carrier mix, peak bandwidth, origin location and attack history."],
      ["02", "Route and policy design", "Select edge paths, cache policies, dynamic origin routes and CC / DDoS controls."],
      ["03", "CNAME validation", "Configure the domain and certificate, then validate caching, origin behavior and carrier performance."],
      ["04", "Monitor and tune", "Optimize using bandwidth, hit ratio, status code, latency and attack-event telemetry."],
    ],
    scenariosTitle: "Best-fit scenarios",
    scenarios: ["Cross-border commerce", "SaaS for users in China", "Game launches and downloads", "Media and online learning", "APIs and mobile backends", "Campaigns and traffic spikes"],
    faqTitle: "Frequently asked questions",
    faq: [
      ["What is monthly 95th-percentile billing?", "Bandwidth samples are typically collected at fixed intervals. The highest 5% are removed at month end and the highest remaining sample becomes billable bandwidth. Contract terms define the exact method."],
      ["Do I need to migrate my origin?", "Usually no. After configuring the origin and hostname, point the business domain by CNAME to the WiseWave endpoint and begin validation."],
      ["Does the entry plan include CC protection?", "No. It retains Anti-DDoS capability and is intended for customers with an existing WAF / CC layer or those focused on route and delivery acceleration."],
      ["What does unlimited protection mean?", "The listed plans do not use attack-peak tiers for additional pricing. Service remains subject to acceptable-use policy, resource scheduling, attack type and the governing agreement."],
    ],
    footer: "WiseWave Pte. Ltd. · Integrated digital infrastructure for AI, cloud, network and security.",
  },
};

function validConfig(value: unknown): value is CdnConfig {
  if (!value || typeof value !== "object") return false;
  const candidate = value as CdnConfig;
  return Number.isFinite(candidate.price_factor) && candidate.price_factor > 0 && Array.isArray(candidate.products);
}

export default function ChinaCdnClient() {
  const [lang, setLang] = useState<Lang>("zh");
  const [config, setConfig] = useState<CdnConfig>(fallbackConfig);
  const t = copy[lang];

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/china-cdn-config", { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("config unavailable"))))
      .then((data: unknown) => {
        if (validConfig(data)) setConfig(data);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  const products = useMemo(
    () => config.products.filter((product) => t.productCopy[product.id]),
    [config.products, t.productCopy],
  );

  return (
    <main className="china-cdn-page">
      <header className="site-header china-header">
        <a className="brand brand-image" href="/" aria-label="WiseWave home">
          <img src="/wisewave-logo-blue.png" alt="WiseWave — Intelligent, Fast, Reliable" />
        </a>
        <nav className="nav-links china-nav" aria-label="China CDN navigation">
          <a href="#capabilities">{lang === "zh" ? "核心能力" : "Capabilities"}</a>
          <a href="#products">{lang === "zh" ? "产品方案" : "Plans"}</a>
          <a href="#faq">FAQ</a>
        </nav>
        <button className="lang-toggle" type="button" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
          <span className={lang === "zh" ? "active" : ""}>中</span><i>/</i><span className={lang === "en" ? "active" : ""}>EN</span>
        </button>
      </header>

      <section className="china-hero">
        <div className="china-route-map" aria-hidden="true"><span /><span /><span /></div>
        <div className="section-shell china-hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-actions">
              <a className="button primary" href="#products">{lang === "zh" ? "查看产品与价格" : "View plans & pricing"}</a>
              <a className="button secondary" href={config.contact_url}>{t.contact}</a>
            </div>
          </div>
          <div className="china-signal-panel">
            <span className="signal-label">HKG EDGE → CHINA USERS</span>
            <strong>2 Tbps</strong>
            <p>CHINA-BOUND ANTI-DDOS CAPACITY</p>
            <div className="signal-bars">{[82, 64, 91, 73, 88, 57, 95, 78].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          </div>
        </div>
        <div className="section-shell china-tag-row">{t.heroTags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </section>

      <section className="china-context" id="capabilities">
        <div className="section-shell split-heading">
          <div><p className="section-kicker">{t.contextKicker}</p><h2>{t.contextTitle}</h2></div>
          <p className="section-lead">{t.contextText}</p>
        </div>
        <div className="section-shell china-capability-grid">
          {t.capabilities.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="china-products" id="products">
        <div className="section-shell section-heading">
          <p className="section-kicker">{t.productsKicker}</p><h2>{t.productsTitle}</h2><p>{t.productsLead}</p>
        </div>
        <div className="section-shell pricing-grid">
          {products.map((product, index) => {
            const productText = t.productCopy[product.id];
            const displayPrice = product.base_price * config.price_factor;
            return (
              <article className={index === 1 ? "price-card recommended" : "price-card"} key={product.id}>
                {index === 1 && <span className="recommend-badge">{t.popular}</span>}
                <p className="price-index">0{index + 1} / {product.id.toUpperCase()}</p>
                <h3>{productText.name}</h3><p className="price-fit">{productText.fit}</p>
                <div className="price"><small>{t.pricePrefix}</small><strong>{displayPrice.toFixed(2)}</strong><span>{t.per}</span></div>
                <div className="price-meta"><span>{t.displayed}: × {config.price_factor}</span><span>{t.original}: US${product.base_price}/{config.unit}</span></div>
                <ul>{productText.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <a className={index === 1 ? "button primary" : "button secondary"} href={`${config.contact_url}${config.contact_url.includes("?") ? "&" : "?"}plan=${encodeURIComponent(product.id)}`}>{t.choose}</a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="china-delivery">
        <div className="section-shell process-layout">
          <div><p className="section-kicker">{t.flowKicker}</p><h2>{t.flowTitle}</h2></div>
          <div className="process-list">{t.flow.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
        <div className="section-shell scenario-panel"><h3>{t.scenariosTitle}</h3><div>{t.scenarios.map((scenario) => <span key={scenario}>{scenario}</span>)}</div></div>
      </section>

      <section className="china-faq" id="faq">
        <div className="section-shell"><p className="section-kicker">FAQ</p><h2>{t.faqTitle}</h2><div className="faq-grid">{t.faq.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div>
      </section>

      <footer>
        <div className="section-shell footer-top"><a className="brand brand-image footer-brand" href="/"><img src="/wisewave-logo-blue.png" alt="WiseWave" /></a><p>{t.footer}</p><a href={config.contact_url}>{t.contact}</a></div>
        <div className="section-shell footer-bottom"><span>© 2026 WiseWave Pte. Ltd.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/">{t.home}</a></div></div>
      </footer>
    </main>
  );
}
