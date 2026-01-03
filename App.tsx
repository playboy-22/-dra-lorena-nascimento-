
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  UserCheck, 
  X,
  ArrowRight,
  Heart,
  Sparkles,
  Plus
} from 'lucide-react';
import { 
  WHATSAPP_URL, 
  INSTAGRAM_URL, 
  EXPERT_NAME, 
  EXPERT_ROLE, 
  ADDRESS, 
  SERVICES, 
  HERO_IMAGE, 
  BIO_IMAGE, 
  GALLERY_IMAGES, 
  RESULTS_IMAGES 
} from './constants';

const Section = ({ children, className = "", id = "" }: { children?: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 px-6 md:py-24 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const CTAButton = ({ text, subtext = true, className = "" }: { text: string, subtext?: boolean, className?: string }) => (
  <div className={`flex flex-col items-center gap-3 w-full max-w-md mx-auto ${className}`}>
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-gradient text-white font-bold py-5 px-6 rounded-2xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all w-full flex items-center justify-center gap-3 text-lg text-center leading-tight"
    >
      <MessageCircle size={24} className="shrink-0" />
      <span>{text}</span>
    </a>
    {subtext && (
      <p className="text-stone-400 text-xs font-medium tracking-wide uppercase">
        Resposta rápida • Sem compromisso
      </p>
    )}
  </div>
);

const App: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxImage]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 overflow-x-hidden selection:bg-stone-200">
      
      {/* 1. HERO */}
      <header className="relative pt-12 md:pt-20 overflow-hidden bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative z-20 text-center px-6 max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-stone-200 rounded-full text-stone-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 animate-fade-in">
              <Star size={10} className="fill-stone-400 text-stone-400" /> Atendimento Premium
            </div>
            <h1 className="text-4xl md:text-7xl font-serif leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Eu sou <span className="italic">{EXPERT_NAME}</span>, sua dentista na Serra.
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light mb-10 leading-relaxed animate-fade-in max-w-lg mx-auto" style={{ animationDelay: '0.2s' }}>
              Transformo a saúde e a estética do seu sorriso com um olhar humano e tecnologia de ponta.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CTAButton text="Agendar primeira consulta gratuita no WhatsApp" />
            </div>
          </div>
          
          <div className="relative w-full max-w-lg md:max-w-2xl px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <img 
              src={HERO_IMAGE} 
              alt={EXPERT_NAME} 
              className="w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-stone-200/50 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-5/12">
            <div className="relative group">
              <img 
                src={BIO_IMAGE} 
                alt={`Dra. ${EXPERT_NAME}`} 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FAF9F6] border border-stone-100 rounded-2xl hidden md:flex items-center justify-center p-4 shadow-lg">
                <p className="text-stone-900 font-serif italic text-sm text-center">Referência em Odontologia na Serra</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Paixão por cuidar de cada detalhe do seu sorriso.</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              <p>
                Acredito que um tratamento odontológico não deve ser apenas sobre dentes, mas sobre como você se sente ao sorrir para o mundo.
              </p>
              <p>
                No meu consultório, prezo pela <strong>clareza, honestidade e pelo conforto</strong> do paciente. Minha missão é oferecer uma experiência leve, transparente e de altíssima qualidade.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
                {SERVICES.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-stone-400 shrink-0" />
                    <span className="text-stone-800 text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-stone-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 italic">Resultados Reais</h2>
          <p className="text-stone-500 font-light text-lg">Impacto real na vida e na autoestima de quem confia no meu trabalho.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          {RESULTS_IMAGES.map((img, i) => (
            <div 
              key={i} 
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/5] shadow-sm hover:shadow-xl transition-all"
              onClick={() => setLightboxImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado Odontológico ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900">Ampliar</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-stone-400 text-[10px] uppercase tracking-widest mb-10">
            *Os resultados podem variar de pessoa para pessoa.
          </p>
          <CTAButton text="Quero transformar meu sorriso" subtext={false} />
        </div>
      </Section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <Section className="bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Por que confiar em mim?</h2>
            <p className="text-stone-500 font-light">Diferenciais que tornam o meu atendimento exclusivo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all">
              <ShieldCheck className="text-stone-800 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-3">Avaliação Honestíssima</h3>
              <p className="text-stone-600 font-light leading-relaxed">Indico apenas o que é essencial para sua saúde. Transparência total em cada diagnóstico.</p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all">
              <UserCheck className="text-stone-800 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-3">Atendimento Comigo</h3>
              <p className="text-stone-600 font-light leading-relaxed">Você não é apenas mais um. Do início ao fim, você será atendido pessoalmente por mim.</p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all">
              <Heart className="text-stone-800 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-3">Humanização Real</h3>
              <p className="text-stone-600 font-light leading-relaxed">Entendo seus receios e medos. Meu consultório é um ambiente seguro, acolhedor e indolor.</p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all">
              <Sparkles className="text-stone-800 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-3">Excelência Técnica</h3>
              <p className="text-stone-600 font-light leading-relaxed">Utilizo materiais de padrão premium para garantir durabilidade e estética natural.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all">
              <MapPin className="text-stone-800 mb-4" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold text-stone-900 mb-3">Localização Premium</h3>
              <p className="text-stone-600 font-light leading-relaxed">Consultório moderno no Centro Empresarial da Serra, com total segurança e conforto.</p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 hover:shadow-lg transition-all flex flex-col justify-center items-center text-center">
              <p className="text-stone-900 font-serif italic text-lg mb-6">Pronto para dar o primeiro passo?</p>
              <a href={WHATSAPP_URL} target="_blank" className="text-stone-800 font-bold border-b-2 border-stone-800 flex items-center gap-2 pb-1 hover:gap-4 transition-all">
                Falar no WhatsApp <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-stone-900 text-white relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">Medo de dentista? Vamos mudar isso juntos.</h2>
          <p className="text-stone-400 mb-12 text-lg font-light italic">"Minha maior satisfação é ver um paciente que tinha receio sair do consultório sorrindo e confiante."</p>
          <CTAButton text="Conversar agora no WhatsApp" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-800 rounded-full blur-3xl -ml-32 -mb-32 opacity-50"></div>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Sua avaliação em 3 passos</h2>
            <p className="text-stone-500 font-light">Simples, prático e 100% focado em você.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 font-serif text-2xl italic mb-6 shadow-sm">1</div>
              <h4 className="text-xl font-bold mb-3">WhatsApp</h4>
              <p className="text-stone-600 font-light leading-relaxed">Você clica no botão e fala diretamente comigo ou com minha equipe para tirar dúvidas.</p>
            </div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 font-serif text-2xl italic mb-6 shadow-sm">2</div>
              <h4 className="text-xl font-bold mb-3">Agendamento</h4>
              <p className="text-stone-600 font-light leading-relaxed">Escolhemos o melhor horário para você no Centro Empresarial da Serra.</p>
            </div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-2xl italic mb-6 shadow-xl scale-110">3</div>
              <h4 className="text-xl font-bold mb-3">Avaliação</h4>
              <p className="text-stone-600 font-light leading-relaxed">Conversamos sobre seu caso e planejo o tratamento ideal. <span className="text-stone-900 font-semibold italic">Gratuita e sem compromisso.</span></p>
            </div>
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-[1px] bg-stone-200 -z-0"></div>
          </div>
        </div>
      </Section>

      {/* 7. BASTIDORES E DEDICAÇÃO (LAYOUT PREMIUM MOSAICO) */}
      <Section className="bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic mb-4">Bastidores e Dedicação</h2>
            <p className="text-stone-500 font-light">Um pouco do meu dia a dia cuidando de sorrisos.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
            {GALLERY_IMAGES.map((img, i) => {
              let spanClass = "col-span-1 row-span-1";
              if (i === 0) spanClass = "col-span-2 row-span-2";
              if (i === 3) spanClass = "col-span-1 row-span-2";
              if (i === 5) spanClass = "col-span-2 row-span-1";
              
              return (
                <div 
                  key={i} 
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-sm ${spanClass}`}
                  onClick={() => setLightboxImage(img)}
                >
                  <img 
                    src={img} 
                    alt={`Bastidores Dra. Lorena ${i + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Plus className="text-white" size={32} strokeWidth={1} />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-stone-400 text-sm font-light italic">Clique para ampliar.</p>
          </div>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-[#FAF9F6] border-t border-stone-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight italic">
            Vamos começar a cuidar do seu sorriso hoje?
          </h2>
          <p className="text-xl text-stone-600 font-light mb-12 max-w-xl mx-auto">
            A primeira consulta é o seu momento de tirar dúvidas e entender como posso te ajudar. <strong>Sem custos, sem pressão.</strong>
          </p>
          <CTAButton text="Sim! Quero agendar minha consulta gratuita" />
        </div>
      </Section>

      {/* 9. RODAPÉ */}
      <footer className="bg-white py-16 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-serif italic text-stone-900 mb-2">{EXPERT_NAME}</h3>
            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-[0.2em]">{EXPERT_ROLE}</p>
          </div>
          
          <div className="flex gap-8 mb-12">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-all transform hover:scale-110">
              <Instagram size={28} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-[#25D366] transition-all transform hover:scale-110">
              <MessageCircle size={28} />
            </a>
          </div>

          <div className="text-center text-stone-400 font-light text-sm space-y-4">
            <p className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-stone-300" /> {ADDRESS}
            </p>
            <div className="w-10 h-[1px] bg-stone-200 mx-auto"></div>
            <p className="text-[10px] uppercase tracking-widest opacity-60 italic">
              © {new Date().getFullYear()} {EXPERT_NAME} • Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-stone-950/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-all bg-white/10 p-3 rounded-full"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>
          <img 
            src={lightboxImage} 
            alt="Resultado em detalhe" 
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl animate-zoom-in" 
          />
        </div>
      )}

      {/* Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-gradient text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center animate-bounce hover:animate-none active:scale-90 transition-all"
        >
          <MessageCircle size={30} />
        </a>
      </div>

    </div>
  );
};

export default App;
