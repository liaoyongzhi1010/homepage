import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "线上产品 - 梯度空间",
  description: "梯度助手 - 专为追求高效的个人学习者、研究者及企业团队打造",
};

export default function OnlinePage() {
  const advantages = [
    { title: "开箱即用", description: "无需复杂配置，注册即可开始使用" },
    { title: "数据安全", description: "企业级数据加密，保障您的隐私安全" },
    { title: "个性化定制", description: "支持私有化部署，满足个性化需求" },
    { title: "费用透明", description: "明确的计费规则，无隐藏消费" }
  ];

  const aiModels = [
    {
      name: "通义千问",
      desc: "阿里云推出的AI助手",
      icon: "https://img.alicdn.com/imgextra/i4/O1CN01Ue4htA1hduZMvHQlx_!!6000000004301-2-tps-270-90.png"
    },
    {
      name: "豆包",
      desc: "字节跳动AI对话助手",
      icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png"
    },
    {
      name: "腾讯混元",
      desc: "腾讯自研大语言模型",
      icon: "https://cloud.tencent.com/favicon.ico"
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-sky-50 to-blue-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-blue-100 via-transparent to-indigo-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-12">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            梯度助手
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            专为追求高效的个人学习者、研究者及企业团队打造
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            立即体验
          </button>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            服务优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            支持的AI模型
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiModels.map((model, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={model.icon}
                    alt={model.name}
                    className={`object-contain ${model.name === '通义千问' ? 'w-32 h-16' : 'w-16 h-16'}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            持续接入更多优质AI模型...
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            应用场景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img src="/images/personal-learning-bg.png" alt="个人学习" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">个人学习</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 知识点解答</li>
                  <li>• 论文写作辅助</li>
                  <li>• 语言学习练习</li>
                  <li>• 编程代码帮助</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img src="/images/research-work-bg.png" alt="科研工作" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">科研工作</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 文献调研</li>
                  <li>• 数据分析</li>
                  <li>• 实验设计</li>
                  <li>• 报告撰写</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img src="/images/enterprise-bg.png" alt="企业应用" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">企业应用</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 知识库管理</li>
                  <li>• 客户服务</li>
                  <li>• 内容创作</li>
                  <li>• 业务分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
