export default function AIAssistantPage() {
  const problems = [
    {
      icon: "🔧",
      title: "技术门槛过高",
      items: [
        "每个模型API接口各不相同",
        "需要编写大量适配代码",
        "学习成本高，开发周期长",
        "维护多套代码困难重重"
      ]
    },
    {
      icon: "🤔",
      title: "选择决策困难",
      items: [
        "10+模型不知如何选择",
        "缺乏统一的性能对比标准",
        "不同场景适配不同模型",
        "试错成本高，切换成本更高"
      ]
    },
    {
      icon: "📊",
      title: "管理复杂混乱",
      items: [
        "多个账户多套计费体系",
        "成本控制困难容易超支",
        "缺乏统一的使用数据分析",
        "无法有效评估ROI"
      ]
    },
    {
      icon: "⚠️",
      title: "服务稳定性差",
      items: [
        "单一模型故障影响业务",
        "缺乏自动容灾切换机制",
        "高峰期限流影响体验",
        "没有统一的监控告警"
      ]
    }
  ];

  const solutions = [
    {
      icon: "⚡",
      title: "统一API接口",
      desc: "一套代码接入所有模型。兼容OpenAI标准接口，零学习成本，快速迁移，切换模型只需修改一个参数。"
    },
    {
      icon: "🤖",
      title: "智能模型路由",
      desc: "AI帮你选择最优模型。根据任务类型、成本预算、响应速度自动推荐，持续学习优化，越用越智能。"
    },
    {
      icon: "📈",
      title: "统一服务管理",
      desc: "一站式管理所有模型。统一账户计费、透明成本控制、完整数据分析、智能预算预警。"
    },
    {
      icon: "🛡️",
      title: "高可用保障",
      desc: "7×24小时稳定服务。自动容灾切换、智能负载均衡、实时监控告警、99.9%可用性保证。"
    }
  ];

  const advantages = [
    {
      number: "1",
      title: "极速接入",
      desc: "5分钟完成接入，无需学习新的API规范",
      features: [
        "兼容OpenAI接口标准",
        "提供多语言SDK支持",
        "详细的接入文档和示例",
        "7×24小时技术支持"
      ]
    },
    {
      number: "2",
      title: "智能优化",
      desc: "AI驱动的智能路由，自动选择最优模型",
      features: [
        "基于任务类型智能推荐",
        "平衡性能、成本、速度",
        "持续学习用户偏好",
        "A/B测试自动优化"
      ]
    },
    {
      number: "3",
      title: "成本优化",
      desc: "降低30%-50%的模型使用成本",
      features: [
        "统一采购享受批量优惠",
        "智能路由避免资源浪费",
        "实时成本监控和预警",
        "灵活的计费方式"
      ]
    },
    {
      number: "4",
      title: "高可用性",
      desc: "99.9%服务可用性保证",
      features: [
        "多模型自动容灾切换",
        "智能负载均衡",
        "实时健康检查",
        "分布式架构部署"
      ]
    },
    {
      number: "5",
      title: "数据安全",
      desc: "企业级安全保障，符合国家法规",
      features: [
        "数据加密传输和存储",
        "符合《数据安全法》要求",
        "完善的权限管理体系",
        "定期安全审计"
      ]
    },
    {
      number: "6",
      title: "深度分析",
      desc: "全方位的数据分析和效果评估",
      features: [
        "详细的使用统计报表",
        "模型性能对比分析",
        "成本趋势预测",
        "自定义数据看板"
      ]
    }
  ];

  const useCases = [
    {
      icon: "💬",
      title: "智能客服",
      desc: "构建7×24小时智能客服系统，自动回答用户问题，提升客户满意度，降低人力成本。"
    },
    {
      icon: "✍️",
      title: "内容创作",
      desc: "AI辅助文章写作、营销文案生成、社交媒体内容创作，提升内容生产效率10倍以上。"
    },
    {
      icon: "📊",
      title: "数据分析",
      desc: "自然语言查询数据库，自动生成分析报告，让数据分析变得简单直观。"
    },
    {
      icon: "🎓",
      title: "教育培训",
      desc: "智能答疑、个性化学习推荐、自动批改作业，打造智能化教育平台。"
    },
    {
      icon: "🏥",
      title: "医疗健康",
      desc: "智能问诊、病历分析、健康咨询，辅助医生提升诊疗效率。"
    },
    {
      icon: "⚖️",
      title: "法律咨询",
      desc: "法律文书生成、案例检索、智能法律咨询，降低法律服务门槛。"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-pink-100 via-transparent to-indigo-50 opacity-60 -z-10" />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-12">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            智能助手定制解决方案
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            国内大模型统一接入平台
          </p>
          <p className="text-xl text-gray-600">
            一次接入 · 连接所有主流国产大模型
          </p>
        </div>
      </div>

      {/* Supported Models */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-2xl text-gray-600 mb-8 text-center">
            已接入 10+ 国内主流大模型
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 font-semibold text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300">
              <img src="https://img.alicdn.com/imgextra/i4/O1CN01Ue4htA1hduZMvHQlx_!!6000000004301-2-tps-270-90.png" alt="通义千问" className="h-8 object-contain" />
              <span>通义千问</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 font-semibold text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300">
              <img src="https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png" alt="豆包" className="h-8 object-contain" />
              <span>豆包</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 font-semibold text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300">
              <img src="https://cloud.tencent.com/favicon.ico" alt="腾讯混元" className="h-8 object-contain" />
              <span>腾讯混元</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center gap-3 font-semibold text-gray-800 hover:bg-white hover:shadow-lg transition-all duration-300">
              <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>更多接入请垂询</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            多模型接入的四大困境
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            企业和开发者面临的核心挑战
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {problem.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            梯度助手的解决方案
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            四大核心能力，彻底解决多模型接入难题
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-3">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-sm opacity-95 leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            为什么选择梯度助手
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            六大核心优势，让您的AI应用更强大
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
                    {advantage.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{advantage.desc}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {advantage.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            适用场景
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            覆盖各行业的AI应用需求
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-500 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
