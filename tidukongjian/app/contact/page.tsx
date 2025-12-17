export default function ContactPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-pink-100 via-transparent to-purple-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            联系我们
          </h1>
          <p className="text-2xl text-gray-700">
            期待与您携手，共创智慧学习新未来
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div>
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                联系方式
              </h2>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">邮箱</h3>
                  <p className="text-gray-600">tidukongjian@163.com</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">地址</h3>
                  <p className="text-gray-600 mb-3">梯度空间自习室（杭州下沙店）</p>
                  <p className="text-gray-600">钱塘区海聚中心2幢404</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">地图</h3>
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://uri.amap.com/marker?position=120.37,30.31&name=梯度空间自习室&src=tidukongjian&coordinate=gaode&callnative=1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <a
                      href="https://uri.amap.com/marker?position=120.37,30.31&name=梯度空间自习室（杭州下沙店）钱塘区海聚中心2幢404&src=tidukongjian&coordinate=gaode&callnative=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      在高德地图中打开 →
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  新媒体矩阵平台
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-2 hover:bg-white transition-colors duration-200">
                      <img src="/images/wechat-work-qr.png" alt="企业微信" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-gray-600">企业微信</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-2 hover:bg-white transition-colors duration-200">
                      <img src="/images/wechat-official-qr.jpg" alt="微信公众号" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-gray-600">微信公众号</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-2 hover:bg-white transition-colors duration-200">
                      <img src="/images/xiaohongshu-qr.png" alt="小红书" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-gray-600">小红书</p>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl p-3 mb-2 hover:bg-white transition-colors duration-200">
                      <img src="/images/douyin-qr.png" alt="抖音" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-gray-600">抖音</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            常见问题
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "如何预约参观线下学习空间？",
                a: "您可以通过邮箱联系我们，我们会尽快安排专人与您对接，确定参观时间。"
              },
              {
                q: "梯度助手支持哪些AI模型？",
                a: "我们支持包括通义千问、豆包、腾讯混元等多个主流AI模型，并持续接入更多优质模型。"
              },
              {
                q: "是否提供企业定制服务？",
                a: "是的，我们为企业提供定制化解决方案，包括私有化部署、知识库管理、专属培训等服务。"
              },
              {
                q: "如何获取更多产品信息？",
                a: "您可以关注我们的微信公众号、小红书或抖音账号，获取最新的产品动态和活动信息。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
