import LegalPage from "../legal-client";

const zh = {
  title: "条款和条件",
  subtitle: "适用于使用 WiseWave 网站和服务的法律条款",
  updated: "最后更新：2026年2月27日",
  intro: [
    "欢迎访问 WiseWave Pte. Ltd.（“公司”或“我们”）的网站。访问或使用本网站即表示您同意受本条款约束。",
  ],
  sections: [
    { title: "1. 公司信息", paragraphs: ["WiseWave Pte. Ltd. 是一家在新加坡注册的公司，提供 AI 模型接入、云基础设施、CDN、网络连接与网络安全相关服务。"], items: ["注册地址：10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
    { title: "2. 网站使用", paragraphs: ["您应仅出于合法目的并按照本条款使用网站。"], items: ["不得将网站用于欺诈或非法活动", "不得试图未经授权访问系统或网络", "不得干扰网站安全或正常运营"] },
    { title: "3. 服务", paragraphs: ["具体服务可能受单独服务协议、技术可行性、供应情况及适用法律约束。网站内容不构成对所有地区、模型或能力永久可用的保证。"] },
    { title: "4. 知识产权", paragraphs: ["除另有说明外，网站文本、图形、标识和软件归 WiseWave Pte. Ltd. 所有或经授权使用。未经许可不得复制、分发或使用我们的品牌。"] },
    { title: "5. 责任限制", paragraphs: ["在法律允许的最大范围内，我们不保证网站不间断或无错误运行，也不对因使用网站产生的间接、附带或后果性损失承担责任。"] },
    { title: "6. 合规与可接受使用", paragraphs: ["用户必须遵守所有适用法律法规，包括反欺诈、网络安全、数据保护及与所使用 AI 模型和内容相关的适用规则。我们可针对违规行为暂停或终止访问。"] },
    { title: "7. 第三方服务", paragraphs: ["服务可能集成第三方模型、云平台或网络资源。第三方服务受其自身条款约束，其能力、版本和可用性可能变化。"] },
    { title: "8. 终止", paragraphs: ["如用户违反条款或相关协议，我们可暂停或终止其对网站或服务的访问。"] },
    { title: "9. 适用法律", paragraphs: ["本条款受新加坡法律管辖并据其解释。"] },
    { title: "10. 联系我们", items: ["Email：info@wisewavesg.com", "地址：10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
  ],
};

const en = {
  title: "Terms and Conditions",
  subtitle: "Legal terms governing your use of the WiseWave website and services",
  updated: "Last updated: 27 February 2026",
  intro: [
    "Welcome to the website of WiseWave Pte. Ltd. (“Company”, “we”, “our” or “us”). By accessing or using this website, you agree to these Terms.",
  ],
  sections: [
    { title: "1. Company information", paragraphs: ["WiseWave Pte. Ltd. is incorporated in Singapore and provides AI model access, cloud infrastructure, CDN, connectivity and related cybersecurity services."], items: ["Registered address: 10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
    { title: "2. Website use", paragraphs: ["You must use this website only for lawful purposes and in accordance with these Terms."], items: ["Do not use the website for fraudulent or unlawful activity", "Do not attempt unauthorised access to systems or networks", "Do not interfere with website security or operation"] },
    { title: "3. Services", paragraphs: ["Services may be subject to separate agreements, technical feasibility, supply and applicable law. Website content does not guarantee permanent availability of every model, capability or region."] },
    { title: "4. Intellectual property", paragraphs: ["Unless stated otherwise, website text, graphics, marks and software are owned by or licensed to WiseWave Pte. Ltd. They may not be copied, distributed or used without permission."] },
    { title: "5. Limitation of liability", paragraphs: ["To the fullest extent permitted by law, we do not guarantee uninterrupted or error-free website operation and are not liable for indirect, incidental or consequential loss arising from website use."] },
    { title: "6. Compliance and acceptable use", paragraphs: ["Users must comply with applicable anti-fraud, cybersecurity, data-protection and model/content usage rules. We may suspend or terminate access for violations."] },
    { title: "7. Third-party services", paragraphs: ["Services may integrate third-party models, clouds or networks. Their own terms apply, and capabilities, versions and availability may change."] },
    { title: "8. Termination", paragraphs: ["We may suspend or terminate access where a user breaches these Terms or an applicable service agreement."] },
    { title: "9. Governing law", paragraphs: ["These Terms are governed by and construed under the laws of Singapore."] },
    { title: "10. Contact", items: ["Email: info@wisewavesg.com", "Address: 10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
  ],
};

export default function TermsPage() {
  return <LegalPage zh={zh} en={en} />;
}
