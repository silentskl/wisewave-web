import LegalPage from "../legal-client";

const zh = {
  title: "隐私政策",
  subtitle: "我们如何保护和管理您的个人信息",
  updated: "最后更新：2026年2月27日",
  intro: [
    "WiseWave Pte. Ltd.（“我们”）致力于根据适用的数据保护法律（包括新加坡个人数据保护法 PDPA）保护您的个人数据。",
  ],
  sections: [
    { title: "1. 我们收集的信息", paragraphs: ["当您联系我们或使用网站时，我们可能收集您主动提供的信息及必要的技术数据。"], items: ["姓名、公司名称、职位、电子邮箱及电话号码", "IP 地址、设备与浏览器信息", "网站使用与分析数据"] },
    { title: "2. 信息使用方式", items: ["回应咨询并提供服务", "改进网站、产品和客户体验", "维护服务安全、预防欺诈并履行法律义务", "在获得适当同意时发送业务资讯"] },
    { title: "3. 信息共享", paragraphs: ["我们不会出售您的个人数据。仅在提供服务、遵守法律或保护合法权益所必需时，与受约束的服务提供商、专业顾问或主管机构共享相关信息。"] },
    { title: "4. 跨境传输", paragraphs: ["如需将数据传输至新加坡境外，我们会采取合理措施，确保接收方提供与适用法律相当的保护。"] },
    { title: "5. 数据保留与安全", paragraphs: ["我们仅在实现收集目的或履行法律义务所需期间保留数据，并采用合理的技术与组织措施防止未经授权的访问、使用、披露、修改或丢失。"] },
    { title: "6. 您的权利", paragraphs: ["您可以依据适用法律请求访问、更正或撤回对个人数据处理的同意。撤回同意可能影响我们继续提供部分服务。"] },
    { title: "7. Cookie 与第三方链接", paragraphs: ["网站可能使用 Cookie 和分析技术，也可能包含第三方网站链接。第三方网站适用其自身隐私政策。"] },
    { title: "8. 政策更新", paragraphs: ["我们可能不时更新本政策，并在本页面发布最新版本和更新日期。"] },
    { title: "9. 联系我们", items: ["Email：info@wisewavesg.com", "地址：10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
  ],
};

const en = {
  title: "Privacy Policy",
  subtitle: "How we protect and manage your personal information",
  updated: "Last updated: 27 February 2026",
  intro: [
    "WiseWave Pte. Ltd. (“we”, “our”, “us”) is committed to protecting personal data under applicable laws, including Singapore’s Personal Data Protection Act (PDPA).",
  ],
  sections: [
    { title: "1. Information we collect", paragraphs: ["When you contact us or use this website, we may collect information you provide and necessary technical data."], items: ["Name, company, title, email address and phone number", "IP address, device and browser information", "Website usage and analytics data"] },
    { title: "2. How we use information", items: ["Respond to enquiries and provide services", "Improve our website, products and customer experience", "Maintain security, prevent fraud and meet legal obligations", "Send business updates when appropriate consent has been obtained"] },
    { title: "3. Sharing", paragraphs: ["We do not sell personal data. We share relevant information only when necessary to provide services, comply with law or protect legitimate interests, including with bound service providers, advisers and authorities."] },
    { title: "4. International transfers", paragraphs: ["Where data is transferred outside Singapore, we take reasonable steps to ensure the recipient provides protection comparable to applicable law."] },
    { title: "5. Retention and security", paragraphs: ["We retain data only as long as necessary for its purpose or legal obligations and use reasonable technical and organisational safeguards against unauthorised access, use, disclosure, change or loss."] },
    { title: "6. Your rights", paragraphs: ["Subject to applicable law, you may request access, correction or withdrawal of consent. Withdrawal may affect our ability to provide certain services."] },
    { title: "7. Cookies and external links", paragraphs: ["The website may use cookies and analytics technologies and may link to third-party sites governed by their own privacy policies."] },
    { title: "8. Updates", paragraphs: ["We may update this policy and will publish the latest version and date on this page."] },
    { title: "9. Contact", items: ["Email: info@wisewavesg.com", "Address: 10 Anson Road, #13-09, International Plaza, Singapore 079903"] },
  ],
};

export default function PrivacyPage() {
  return <LegalPage zh={zh} en={en} />;
}
