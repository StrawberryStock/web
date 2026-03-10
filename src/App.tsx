import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  TrendingUp, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                HYUN & <span className={isScrolled ? 'text-slate-500' : 'text-slate-300'}>PARTNERS</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-blue-500 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <a 
                href="#contact" 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isScrolled 
                    ? 'bg-blue-900 text-white hover:bg-slate-800' 
                    : 'bg-white text-blue-900 hover:bg-blue-50'
                }`}
              >
                상담문의
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={isScrolled ? 'text-slate-900' : 'text-white'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4 shadow-xl">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-slate-600 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-blue-900 text-white px-6 py-3 rounded-lg text-center font-medium"
                >
                  상담문의
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient h-screen flex items-center justify-center text-center px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-blue-300 tracking-[0.3em] uppercase mb-4 text-sm font-semibold">Real Estate & Finance Intelligence</p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            가치 있는 자산 관리의<br />새로운 기준, <span className="text-blue-400">현앤파트너스</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            부동산 컨설팅부터 NPL 투자까지, 전문적인 분석과 통찰력으로<br className="hidden md:block" /> 귀하의 자산을 최적화합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#services" className="bg-white text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-all">
              사업 분야 확인하기
            </a>
            <a href="#about" className="border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all">
              회사 소개
            </a>
          </div>
        </motion.div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white opacity-50"
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-40 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeInUp}
              className="order-2 lg:order-1"
            >
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-slate-900 leading-snug">
                변화하는 시장 환경에서도<br /> 흔들리지 않는 신뢰의 파트너
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                현앤파트너스 주식회사는 급변하는 금융 및 부동산 시장에서 정확한 데이터 분석과 풍부한 네트워크를 바탕으로 최상의 컨설팅 솔루션을 제공합니다.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                우리는 단순히 자산을 관리하는 것을 넘어, 고객의 비즈니스 가치를 극대화하고 지속 가능한 수익 구조를 창출하는 데 집중합니다. 서울 도봉구 씨드큐브의 새로운 중심지에서 혁신적인 금융 모델을 선도합니다.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t pt-8">
                <div>
                  <p className="text-3xl font-bold text-blue-900">15+</p>
                  <p className="text-sm text-slate-500 mt-1 uppercase font-medium">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-900">500+</p>
                  <p className="text-sm text-slate-500 mt-1 uppercase font-medium">Projects Done</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Office" 
                className="rounded-xl shadow-2xl w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 p-8 rounded-xl hidden md:block max-w-xs">
                <p className="text-white italic text-lg font-light leading-relaxed">
                  "전문성은 데이터에서 나오고,<br />신뢰는 결과에서 증명됩니다."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Our Core Business</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">핵심 사업 영역</h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-900 transition-colors">
                <Building2 className="text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">부동산 컨설팅</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                상업용 부동산, 토지 개발 및 분양 전략 등 전문적인 분석을 통해 부동산 가치 상승을 위한 전방위 솔루션을 제공합니다.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 부동산 시장 분석 및 타당성 검토</li>
                <li>• 매입/매각 자문 및 전략 수립</li>
                <li>• 자산 관리 및 운용 최적화</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 bg-slate-900 text-white rounded-2xl shadow-xl transition-all hover:translate-y-[-10px]"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <TrendingUp className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">주식 포트폴리오</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                거시 경제 지표와 기업 펀더멘탈 분석을 결합하여 리스크를 최소화하고 수익을 극대화하는 맞춤형 포트폴리오를 제안합니다.
              </p>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>• 맞춤형 자산 배분 전략</li>
                <li>• 글로벌 거시 경제 리서치</li>
                <li>• 리스크 관리 시스템 가동</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-900 transition-colors">
                <Briefcase className="text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NPL 투자</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                부실채권(NPL) 시장의 기회를 선점합니다. 담보가치 평가와 권리 분석을 통해 안전하고 효율적인 투자 모델을 구축합니다.
              </p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>• 부실채권 매입 및 유동화</li>
                <li>• 담보 부동산 경·공매 컨설팅</li>
                <li>• 채권 회수 전략 최적화</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">현앤파트너스와 함께 미래를 설계하십시오</h2>
          <p className="text-blue-200 mb-10 text-lg">지금 바로 전문가와의 상담을 통해 귀하의 자산을 위한 최선의 답을 찾으세요.</p>
          <a href="#contact" className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all inline-block">
            문의하기
          </a>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div 
              {...fadeInUp}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Contact Us</h2>
              <p className="text-slate-600 mb-12 leading-relaxed">
                상담이 필요하시거나 궁금하신 점이 있다면 언제든 연락주십시오.<br />
                현앤파트너스의 전문가가 신속하게 답변해 드리겠습니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-100 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-slate-600 mt-1">서울특별시 도봉구 씨드큐브 (Seed Cube)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-100 p-3 rounded-full mr-4">
                    <Phone className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 bg-slate-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">info@hyun-partners.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">성함</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">연락처</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">문의유형</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all">
                    <option>부동산 컨설팅</option>
                    <option>주식 포트폴리오</option>
                    <option>NPL 투자</option>
                    <option>기타 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">메시지</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all"></textarea>
                </div>
                <button className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg">
                  전송하기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-white">HYUN & <span className="text-slate-400">PARTNERS</span></span>
            <p className="text-slate-500 text-sm mt-2">© 2024 현앤파트너스 주식회사. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">오시는 길</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
