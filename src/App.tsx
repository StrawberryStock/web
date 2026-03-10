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
    { name: 'Portfolio', href: '#portfolio' }, 
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                HYUN & <span className={isScrolled ? 'text-slate-500' : 'text-slate-300'}>PARTNERS</span>
              </span>
            </div>
            
            <div className={`hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-blue-500 transition-colors text-[11px]">
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
      <section id="home" className="bg-[#001529] h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Background" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl relative z-10"
        >
          <p className="text-blue-300 tracking-[0.3em] uppercase mb-4 text-sm font-semibold">Real Estate & Finance Intelligence</p>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter">
            자산 가치 제고의<br />새로운 기준, <span className="text-blue-400">현앤파트너스</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            부동산 컨설팅부터 NPL 투자까지, 전문적인 분석과 통찰력으로<br className="hidden md:block" /> 귀하의 자산을 최적화합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#services" className="bg-white text-slate-900 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-all">
              사업 분야 확인하기
            </a>
            <a href="#portfolio" className="border border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-all">
              실시간 포트폴리오
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
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-slate-900 leading-snug">
                변화하는 시장 환경에서도<br /> 흔들리지 않는 신뢰의 파트너
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                현앤파트너스 주식회사는 급변하는 금융 환경에서 정확한 데이터 분석과 풍부한 네트워크를 바탕으로 최상의 컨설팅 솔루션을 제공합니다.
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
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Office" className="rounded-xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 p-8 rounded-xl hidden md:block max-w-xs shadow-xl">
                <p className="text-white italic text-lg font-light leading-relaxed">
                  "전문성은 데이터에서 나오고,<br />신뢰는 결과에서 증명됩니다."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ★★★ Portfolio Section (이 부분이 추가되었습니다) ★★★ */}
      <section id="portfolio" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800"
          >
            {/* 왼쪽 설명 구역 */}
            <div className="lg:w-1/3 p-10 lg:p-16 flex flex-col justify-center">
              <span className="text-blue-400 font-bold tracking-[0.2em] text-[10px] uppercase mb-4">Live Performance</span>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">
                실시간 <br/><span className="text-blue-400 italic font-black">포트폴리오</span> 현황
              </h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-light text-sm">
                현앤파트너스가 직접 운용 중인 모델 포트폴리오의 수익률을 투명하게 공개합니다.
                실시간 데이터를 통해 자산 배분의 성과를 직접 확인하십시오.
              </p>
              <a 
                href="https://my-stock-vjddvx5wzvxcc5stbpgpd2.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all w-fit shadow-lg shadow-blue-900/20"
              >
                상세 대시보드 보기 <TrendingUp size={18} />
              </a>
            </div>

            {/* 오른쪽 스트림릿 임베드 구역 */}
            <div className="lg:w-2/3 bg-white h-[600px] relative group">
              <iframe 
                src="https://my-stock-vjddvx5wzvxcc5stbpgpd2.streamlit.app/?embed=true" 
                className="w-full h-full border-none"
                title="Streamlit Portfolio Dashboard"
              ></iframe>
              <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all flex items-center justify-center">
                <p className="text-white bg-blue-900/90 px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all shadow-xl">
                  Interactive Dashboard
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Our Core Business</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">핵심 사업 영역</h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-900 transition-colors">
                <Building2 className="text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">부동산 컨설팅</h3>
              <p className="text-slate-600 leading-relaxed mb-6">상업용 부동산, 토지 개발 및 분양 전략 등 전문적인 분석을 통해 부동산 가치 상승을 위한 전방위 솔루션을 제공합니다.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 bg-slate-900 text-white rounded-2xl shadow-xl transition-all hover:translate-y-[-10px]">
              <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-8">
                <TrendingUp className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">주식 포트폴리오</h3>
              <p className="text-slate-300 leading-relaxed mb-6">거시 경제 지표와 기업 펀더멘탈 분석을 결합하여 리스크를 최소화하고 수익을 극대화하는 맞춤형 포트폴리오를 제안합니다.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="p-10 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-900 transition-colors">
                <Briefcase className="text-blue-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">NPL 투자</h3>
              <p className="text-slate-600 leading-relaxed mb-6">부실채권(NPL) 시장의 기회를 선점합니다. 담보가치 평가와 권리 분석을 통해 안전하고 효율적인 투자 모델을 구축합니다.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tighter">Contact Us</h2>
              <p className="text-slate-600 mb-12 leading-relaxed">
                상담이 필요하시거나 궁금하신 점이 있다면 언제든 연락주십시오.<br />
                현앤파트너스의 전문가가 신속하게 답변해 드리겠습니다.
              </p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-900 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-slate-600">서울특별시 도봉구 씨드큐브 (Seed Cube)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-900 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">02-6314-7430</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-900 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600">david@hyun-partners.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <input type="text" placeholder="성함" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:outline-none transition-all" />
                  <input type="text" placeholder="연락처" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:outline-none transition-all" />
                </div>
                <textarea rows={4} placeholder="문의내용" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:outline-none transition-all"></textarea>
                <button className="w-full bg-blue-900 text-white py-5 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl">
                  상담 신청하기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001529] py-16 px-6 border-t border-white/5 text-center md:text-left text-slate-500 text-[10px] font-bold tracking-widest uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <span className="text-xl font-bold tracking-tighter text-white">HYUN & PARTNERS</span>
          <p>© 2026 현앤파트너스 주식회사. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
