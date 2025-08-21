'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0,1], [0,-80]);
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[92vh] gradient-hero overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none"></motion.div>
        <div className="mx-auto max-w-6xl px-6 pt-28">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="flex items-center gap-3">
              <span className="badge">Cápsulas vegetais</span>
              <span className="badge">Clean label</span>
              <span className="badge">GMP / ISO</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05]">
              GENYON — <span className="opacity-90">Sistema biológico inteligente</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl">
              Medicina antes da medicina. Desenvolvido com ciência de ponta e potenciado por IA.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#cta" className="btn btn-primary">Quero resultados reais</a>
              <a href="#science" className="btn btn-ghost">Saber mais</a>
            </div>
            <div className="mt-10 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-[var(--card)] h-[420px]"></div>
          </div>
        </div>
      </section>
      <section id="science" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Não corrige. Prevê. Não repara. Previne.</h2>
            <p className="text-[var(--muted)]">A GENYON combina bioativos de elevada pureza com modelos de IA para otimizar resposta metabólica, saciedade e inflamação de baixo grau.</p>
            <div className="flex gap-3 mt-6">
              <span className="badge">100% vegetais</span>
              <span className="badge">Sem estimulantes</span>
              <span className="badge">Lotes testados por 3.º</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[['Saciedade inteligente','Regulação do apetite'],['Metabolismo ativo','Oxidação lipídica'],['Inflamação baixa','Homeostase intestinal']].map(([t,s],i)=>(
              <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card p-5">
                <h4 className="font-semibold">{t}</h4><p className="text-sm text-[var(--muted)]">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10">Duo inteligente</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[{name:'SLIMPRO',desc:'Gestão do apetite, metabolismo de lípidos, energia estável.',bullets:['Menos fome','Menos cravings','Energia suave']},{name:'RESETPRO',desc:'Reset digestivo, microbiota, redução de inchaço e cravings.',bullets:['Microbiota','Desinchaço','Conforto']}].map((p,i)=>(
            <motion.div key={i} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card p-6 flex flex-col md:flex-row gap-6 items-center">
              <div className="w-40 h-40 rounded-xl bg-[var(--card)] border border-white/10" />
              <div><h4 className="text-2xl font-semibold">{p.name}</h4><p className="text-[var(--muted)] mt-1">{p.desc}</p>
                <ul className="mt-3 text-sm text-[var(--muted)] list-disc pl-5">{p.bullets.map(b=><li key={b}>{b}</li>)}</ul>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-[var(--muted)] mt-6"><strong>Duo inteligente:</strong> sinergia diária para perda de peso fácil e natural.</p>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[['74%','menor fome em 2 semanas'],['68%','menos cravings à noite'],['3–5 cm','média de perímetro abdominal em 30 dias*']].map(([k,t],i)=>(
            <motion.div key={i} initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="card p-6 text-center">
              <div className="text-5xl font-bold">{k}</div><div className="text-[var(--muted)]">{t}</div>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-[var(--muted)] mt-3">*Dados indicativos de testes internos piloto. Não substitui aconselhamento médico.</p>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.blockquote initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-2xl md:text-3xl leading-tight text-center">
          “GENYON é mais do que um suplemento — é medicina orgânica: é o corpo que trabalha.”
        </motion.blockquote>
      </section>
      <section id="cta" className="mx-auto max-w-4xl px-6 pb-28">
        <div className="card p-8 text-center">
          <h3 className="text-3xl font-semibold mb-2">Pronto para começar?</h3>
          <p className="text-[var(--muted)] mb-6">Entra na lista privada ou agenda uma chamada de 10 minutos.</p>
          <form action="https://formspree.io/f/xbjwzqyz" method="POST" className="flex flex-col sm:flex-row gap-3 justify-center">
            <input name="email" required placeholder="O teu melhor e-mail" className="px-4 py-3 rounded-lg bg-transparent border border-white/15 outline-none"/>
            <button className="btn btn-primary" type="submit">Entrar na lista</button>
          </form>
          <a href="mailto:ceo@genyon.eu" className="btn btn-ghost mt-4">Falar com especialista</a>
        </div>
      </section>
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-6">
          <div className="text-sm text-[var(--muted)]">
            <div className="flex gap-3 mb-2"><span className="badge">GMP</span><span className="badge">ISO 22000</span><span className="badge">HACCP</span><span className="badge">EU • US • CA • AU</span></div>
            Suplemento alimentar. Não substitui um regime equilibrado. Consulte profissionais de saúde quando necessário.
          </div>
          <div className="text-sm md:text-right text-[var(--muted)]">© {new Date().getFullYear()} Genyon Group — Todos os direitos reservados · <a href="#" className="underline">Políticas</a></div>
        </div>
      </footer>
    </main>
  );
}
