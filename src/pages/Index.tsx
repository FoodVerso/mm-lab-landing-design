import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useReveal } from "@/hooks/use-reveal";
import {
  ChefHat,
  Rocket,
  Package,
  CheckCircle,
  XCircle,
  ShieldCheck,
  Clock,
  Cpu,
  CreditCard,
  HeadphonesIcon,
  Infinity as InfinityIcon,
  Smartphone,
  HelpCircle,
  TrendingUp,
  Flame,
  Lock,
  Gift,
  Star,
  Instagram,
  MessageCircle,
  Youtube,
  Utensils,
  Bike,
  Store,
  Users,
  DollarSign,
  Zap,
} from "lucide-react";

const CHECKOUT_URL = "https://produtos.foguetewill.com.br/pay/mmlab";

const goCheckout = () => window.open(CHECKOUT_URL, "_blank");

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">

      {/* ============ 1. HERO – estilo Gestor IA: aurora + grid + selos ============ */}
      <section className="relative pt-12 pb-10 md:pt-20 md:pb-16 overflow-hidden bg-mm-black">
        {/* Camadas de fundo */}
        <div className="hero-aurora" />
        <div className="absolute inset-0 grid-fade pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-mm-black pointer-events-none" />

        {/* Ícones flutuantes decorativos (estilo apps em torno) */}
        <div className="absolute top-16 left-[8%] hidden md:flex w-12 h-12 rounded-xl bg-mm-green/15 border border-mm-green/40 items-center justify-center float-icon shadow-green-glow">
          <Utensils className="h-5 w-5 text-mm-green" />
        </div>
        <div className="absolute top-32 right-[10%] hidden md:flex w-12 h-12 rounded-xl bg-mm-red/15 border border-mm-red/40 items-center justify-center float-icon shadow-red-glow" style={{ animationDelay: "-2s" }}>
          <Bike className="h-5 w-5 text-mm-red" />
        </div>
        <div className="absolute bottom-20 left-[12%] hidden md:flex w-12 h-12 rounded-xl bg-mm-green/15 border border-mm-green/40 items-center justify-center float-icon" style={{ animationDelay: "-4s" }}>
          <Store className="h-5 w-5 text-mm-green" />
        </div>
        <div className="absolute bottom-28 right-[14%] hidden md:flex w-12 h-12 rounded-xl bg-mm-green/15 border border-mm-green/40 items-center justify-center float-icon" style={{ animationDelay: "-1s" }}>
          <DollarSign className="h-5 w-5 text-mm-green" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img
              src="/lovable-uploads/750e1df2-afde-452b-b3e9-26c460dee47f.png"
              alt="MM LAB Logo"
              width={224}
              height={80}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              data-reveal="zoom"
              className="w-24 md:w-32 h-auto mx-auto mb-5 drop-shadow-[0_0_25px_hsl(var(--mm-green)/0.5)]"
            />

            <div data-reveal data-delay="1" className="inline-flex items-center gap-2 bg-mm-green/10 border border-mm-green/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <Flame className="h-4 w-4 text-mm-green" />
              <span className="text-[11px] md:text-sm text-mm-green font-semibold uppercase tracking-wider">
                Para donos de restaurante e delivery
              </span>
            </div>

            <h1 data-reveal data-delay="2" className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-[1.1] tracking-tight">
              Como{" "}
              <span className="bg-gradient-mixed bg-clip-text text-transparent">
                dobrar o faturamento
              </span>{" "}
              da sua cozinha sem abrir nova loja, sem contratar mais ninguém e usando a mesma estrutura que você já tem.
            </h1>

            <p data-reveal data-delay="3" className="text-base md:text-xl text-white/85 mb-8 max-w-3xl mx-auto leading-relaxed">
              O método <strong className="text-white">Multimarcas</strong> que já
              colocou alunos com 3 marcas dentro da mesma cozinha vendendo no
              iFood em menos de 30 dias.
            </p>

            <div data-reveal data-delay="4" className="flex flex-col items-center gap-4">
              <Button
                variant="cta-large"
                size="lg"
                className="text-base md:text-lg px-8 md:px-12 py-5 md:py-6 shadow-green-glow rounded-full cta-pulse"
                onClick={goCheckout}
              >
                QUERO ESCALAR MINHA COZINHA →
              </Button>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs md:text-sm text-white/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-mm-green" /> Garantia 7 dias
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-mm-green" /> Acesso vitalício
                </span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-mm-green" /> 12x no cartão
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 1.5 SELOS / CREDIBILIDADE (marquee) ============ */}
      <section className="py-8 bg-mm-black border-y border-mm-green/15 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-white/40 mb-5">
          Validado nos principais marketplaces de delivery
        </p>
        <div className="relative">
          <div className="marquee">
            {[...Array(2)].flatMap((_, loop) =>
              ["iFood", "Rappi", "99Food", "Uber Eats", "WhatsApp", "Anota AI", "Goomer"].map((nome, i) => (
                <div
                  key={`${loop}-${i}`}
                  className="flex items-center gap-2 px-6 py-2 rounded-lg border border-mm-green/20 bg-card/50 backdrop-blur-sm whitespace-nowrap"
                >
                  <div className="w-2 h-2 rounded-full bg-mm-green animate-pulse" />
                  <span className="text-white/70 font-semibold text-sm md:text-base">{nome}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ============ 1.6 PARA QUEM É ============ */}
      <section className="py-14 md:py-20 bg-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-mm-green font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              Esse método é pra você se
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-3">
              Você se identifica com pelo menos um destes perfis
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { icon: ChefHat, title: "Dono de restaurante", desc: "Quer escalar sem abrir nova loja física." },
              { icon: Bike, title: "Operador de delivery", desc: "Vive do iFood e quer mais marcas vendendo." },
              { icon: Users, title: "Dark kitchen", desc: "Tem cozinha pronta e quer multiplicar marcas." },
              { icon: Zap, title: "Empreendedor food", desc: "Vai abrir agora e quer começar certo." },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  data-reveal
                  data-delay={String((i % 6) + 1)}
                  className="group relative bg-card border border-mm-green/20 rounded-2xl p-5 hover:border-mm-green hover:-translate-y-1 hover:shadow-green-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-mm-green/10 border border-mm-green/30 flex items-center justify-center mb-4 group-hover:bg-mm-green/20 transition-colors">
                    <Icon className="h-6 w-6 text-mm-green" />
                  </div>
                  <h3 className="text-white font-bold text-base md:text-lg mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 2. PROBLEMA / DOR – conexão imediata ============ */}
      <section className="py-16 md:py-20 bg-mm-dark-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Se você é dono de restaurante, provavelmente está vivendo isso:
            </h2>
            <p className="text-muted-foreground text-lg">
              Cozinha cheia, custos altos e o lucro evaporando no fim do mês.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              "Faturamento travado mesmo com a cozinha funcionando o dia inteiro",
              "Comissão do iFood comendo metade da margem",
              "Vontade de abrir outra loja, mas sem capital nem coragem",
              "Concorrente subindo no ranking e roubando seus pedidos",
              "Sente que trabalha pro funcionário, pro aluguel e pro app",
              "Não sabe o que fazer pra crescer sem estourar o caixa",
            ].map((dor, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String((i % 6) + 1)}
                className="flex items-start gap-3 bg-card border border-mm-red/20 rounded-lg p-4"
              >
                <XCircle className="h-5 w-5 text-mm-red flex-shrink-0 mt-0.5" />
                <p className="text-white/90 text-sm md:text-base">{dor}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-mm-green text-lg md:text-xl font-semibold mt-12 max-w-3xl mx-auto">
            O problema não é você. É o modelo.
          </p>
        </div>
      </section>

      {/* ============ 3. SOLUÇÃO / MECANISMO ÚNICO ============ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-mm-dark-gray to-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <span className="text-mm-green font-bold text-sm md:text-base uppercase tracking-wider">
              A virada de chave
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-white">
              Apresentando o método{" "}
              <span className="bg-gradient-mixed bg-clip-text text-transparent">
                Multimarcas
              </span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Em vez de abrir uma nova loja para vender mais, você cria{" "}
              <strong className="text-mm-green">
                várias marcas de delivery operando dentro da mesma cozinha
              </strong>{" "}
              usando a mesma equipe, o mesmo aluguel e os mesmos
              equipamentos. Mais pedidos, mais marcas no iFood, custo fixo igual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-card border-mm-green/30 hover:border-mm-green hover:shadow-green-glow transition-all">
              <CardContent className="p-6 text-center">
                <Rocket className="h-12 w-12 text-mm-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-mm-green">
                  Escala sem custo fixo
                </h3>
                <p className="text-muted-foreground text-sm">
                  Multiplique o faturamento sem abrir loja, sem contratar e sem
                  alugar nada novo.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-mm-green/30 hover:border-mm-green hover:shadow-green-glow transition-all">
              <CardContent className="p-6 text-center">
                <Package className="h-12 w-12 text-mm-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-mm-green">
                  Domine novos nichos
                </h3>
                <p className="text-muted-foreground text-sm">
                  Açaí, hambúrguer, marmita, japonês várias marcas
                  diferentes saindo da mesma cozinha.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-mm-green/30 hover:border-mm-green hover:shadow-green-glow transition-all">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-mm-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-mm-green">
                  Passo a passo testado
                </h3>
                <p className="text-muted-foreground text-sm">
                  Do conceito da marca à operação no app. Você não precisa
                  inventar nada.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ============ 4. PROVA SOCIAL – RESULTADOS ============ */}
      <section className="py-16 md:py-20 bg-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-mm-green">
              Resultados reais de quem aplicou
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Prints reais de alunos. Sem promessa milagrosa só execução.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card border-mm-green/20 hover:border-mm-green hover:shadow-green-glow transition-all">
              <CardContent className="p-4">
                <img loading="lazy" decoding="async"
                  src="/lovable-uploads/af32416f-fd39-4027-999c-5dce6c4b9b04.png"
                  alt="Resultado financeiro iFood"
                  className="w-full h-auto rounded-lg mb-3"
                />
                <p className="text-white text-sm font-semibold text-center">
                  Marca nova faturando com apenas 12 dias de aberta
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green hover:shadow-green-glow transition-all">
              <CardContent className="p-4">
                <img loading="lazy" decoding="async"
                  src="/lovable-uploads/eef31798-8226-4275-8b3d-8a3e23249200.png"
                  alt="Açaiteca - aluno Daniel"
                  className="w-full h-auto rounded-lg mb-3"
                />
                <p className="text-white text-sm font-semibold text-center">
                  Aluno Daniel: vendia doces e hoje tem uma marca de açaí na
                  mesma cozinha
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/40 shadow-green-glow">
              <CardContent className="p-4">
                <img loading="lazy" decoding="async"
                  src="/lovable-uploads/1a6fcfd7-2916-4517-bf76-f0e112845dc8.png"
                  alt="Will The Burguer - 3 lojas"
                  className="w-full h-auto rounded-lg mb-3 border border-mm-green/30"
                />
                <p className="text-white text-sm font-semibold text-center">
                  ⭐ 3 lojas dentro da mesma cozinha 30 dias só no iFood
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 text-mm-green">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-mm-green" />
            ))}
            <span className="text-white text-sm ml-2">
              Centenas de alunos aplicando o método Brasil afora
            </span>
          </div>
        </div>
      </section>

      {/* ============ 5. AUTORIDADE – William Flores ============ */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-mm-black to-mm-dark-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-mm-green/20 blur-3xl rounded-full" />
                <div className="relative p-2 bg-gradient-to-br from-mm-green/10 to-mm-red/10 rounded-2xl border border-mm-green/30 shadow-green-glow">
                  <img loading="lazy" decoding="async"
                    src="/lovable-uploads/b07bc6f2-f3ce-4050-a7c7-2db37f5fcd32.png"
                    alt="William Flores"
                    className="w-72 md:w-80 h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="text-mm-green text-sm font-bold uppercase tracking-wider">
                Quem vai te ensinar
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                William Flores o cara por trás do método
              </h2>
              <p className="text-white/85 leading-relaxed mb-4">
                Empresário do delivery, criador do método Multimarcas e
                referência nacional em escalar cozinhas sem abrir nova loja.
                Hoje opera múltiplas marcas dentro da mesma estrutura e ensina
                outros donos de restaurante a fazer o mesmo.
              </p>
              <ul className="space-y-2 text-white/80 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-mm-green" />
                  Mais de 3 marcas operando na mesma cozinha
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-mm-green" />
                  Centenas de alunos aplicando o método
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-mm-green" />
                  Estratégia validada no iFood, Rappi e 99Food
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. O QUE VOCÊ RECEBE – Stack da oferta ============ */}
      <section className="py-16 md:py-20 bg-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-mm-green font-bold text-sm uppercase tracking-wider">
              Tudo que você leva
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
              5 Módulos + Bônus exclusivos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                titulo: "MÓDULO 1 Conceito Multimarcas",
                desc: "Como pensar, criar e validar marcas que vendem dentro da mesma cozinha.",
                valor: "R$ 297",
              },
              {
                titulo: "MÓDULO 2 Contabilidade Inteligente",
                desc: "Como organizar o financeiro com várias marcas operando ao mesmo tempo.",
                valor: "R$ 197",
              },
              {
                titulo: "MÓDULO 3 Sistemas e Ferramentas",
                desc: "Stack completo de apps, integrações e gestão para operar no automático.",
                valor: "R$ 247",
              },
              {
                titulo: "MÓDULO 4 Vendas Multimarcas",
                desc: "Estratégias de iFood, Rappi e 99Food para subir no ranking e vender mais.",
                valor: "R$ 397",
              },
              {
                titulo: "MÓDULO 5 Operação e Escala",
                desc: "Como manter a qualidade quando os pedidos triplicam.",
                valor: "R$ 297",
              },
              {
                titulo: "BÔNUS Módulo Extra + Atualizações",
                desc: "Conteúdos novos liberados sem custo + suporte via WhatsApp.",
                valor: "R$ 397",
                bonus: true,
              },
            ].map((item, i) => (
              <div
                key={i}
                data-reveal
                data-delay={String((i % 6) + 1)}
                className={`relative bg-card border rounded-xl p-5 transition-all hover:-translate-y-1 ${
                  item.bonus
                    ? "border-mm-red shadow-red-glow"
                    : "border-mm-green/30 hover:border-mm-green hover:shadow-green-glow"
                }`}
              >
                {item.bonus && (
                  <div className="absolute -top-3 left-4 bg-mm-red text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Gift className="h-3 w-3" /> BÔNUS
                  </div>
                )}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    className={`font-bold text-base md:text-lg ${
                      item.bonus ? "text-mm-red" : "text-mm-green"
                    }`}
                  >
                    {item.titulo}
                  </h3>
                  <span className="text-white/60 text-xs whitespace-nowrap">
                    {item.valor}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-r from-mm-green/10 to-mm-red/10 border border-mm-green/40 rounded-xl p-6 text-center">
            <p className="text-white text-lg">
              Valor total real:{" "}
              <span className="line-through text-white/50">R$ 932</span>
            </p>
            <p className="text-mm-green text-2xl md:text-3xl font-bold mt-1">
              Hoje, por apenas R$ 297 à vista (ou 12x R$ 31,22)
            </p>
          </div>
        </div>
      </section>

      {/* ============ 7. ANTES x DEPOIS ============ */}
      <section className="py-16 md:py-20 bg-mm-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sua cozinha em <span className="text-mm-green">90 dias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-mm-red/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-mm-red mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5" /> ANTES
              </h3>
              <ul className="space-y-3 text-white/85 text-sm md:text-base">
                <li>• Uma marca só, dependendo do humor do iFood</li>
                <li>• Cozinha ociosa fora do pico</li>
                <li>• Margem apertada, lucro no osso</li>
                <li>• Sem previsibilidade de faturamento</li>
                <li>• Concorrência te ultrapassando</li>
              </ul>
            </div>

            <div className="bg-card border border-mm-green/40 shadow-green-glow rounded-xl p-6">
              <h3 className="text-xl font-bold text-mm-green mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> DEPOIS
              </h3>
              <ul className="space-y-3 text-white/90 text-sm md:text-base">
                <li>• 2, 3 ou mais marcas vendendo simultaneamente</li>
                <li>• Cozinha rodando 100% do tempo</li>
                <li>• Faturamento multiplicado, custo fixo igual</li>
                <li>• Operação previsível e escalável</li>
                <li>• Você na frente do mercado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 8. PRICING / OFERTA + GARANTIA ============ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-mm-dark-gray to-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="bg-mm-red text-white px-4 py-1 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider">
              Lote promocional últimas vagas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Comece <span className="text-mm-green">hoje mesmo</span>
            </h2>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="bg-card border-2 border-mm-green shadow-green-glow">
              <CardContent className="p-8 md:p-10 text-center">
                <p className="text-white/70 text-sm mb-2">De</p>
                <p className="text-2xl text-white/50 line-through mb-1">
                  R$ 932
                </p>
                <p className="text-white/70 text-sm mb-2">por apenas</p>
                <div className="text-5xl md:text-6xl font-extrabold text-mm-green mb-1">
                  R$ 297 <span className="text-2xl md:text-3xl font-bold">à vista</span>
                </div>
                <p className="text-mm-red font-bold text-xl mb-4">
                  ou 12x R$ 31,22
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Acesso vitalício + atualizações grátis
                </p>

                <ul className="text-left space-y-2 mb-6">
                  {[
                    "5 Módulos completos do método",
                    "Bônus exclusivo de operação",
                    "Suporte via WhatsApp",
                    "Acesso vitalício",
                    "Atualizações futuras incluídas",
                  ].map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/90 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-mm-green flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="cta-large"
                  className="w-full text-lg md:text-xl py-6"
                  onClick={goCheckout}
                >
                  QUERO MINHA VAGA AGORA →
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                  <Lock className="h-3 w-3" /> Pagamento 100% seguro
                </div>
              </CardContent>
            </Card>

            {/* Garantia */}
            <div className="mt-8 bg-card border border-mm-green/30 rounded-xl p-6 flex items-start gap-4">
              <ShieldCheck className="h-12 w-12 text-mm-green flex-shrink-0" />
              <div>
                <h3 className="text-mm-green font-bold text-lg mb-1">
                  Garantia incondicional de 7 dias
                </h3>
                <p className="text-white/80 text-sm">
                  Entre, assista tudo, aplique. Se em 7 dias você achar que não é
                  pra você, devolvemos 100% do seu dinheiro. Sem perguntas, sem
                  burocracia. O risco é todo nosso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 9. FAQ ============ */}
      <section className="py-16 md:py-20 bg-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-mixed bg-clip-text text-transparent">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  icon: HelpCircle,
                  q: "O que é o MM LAB?",
                  a: "O MM LAB é um curso 100% online onde você aprende o método Multimarcas, que permite operar várias marcas de delivery dentro da mesma cozinha, com o mesmo custo e estrutura, aumentando o faturamento sem abrir novas lojas físicas.",
                },
                {
                  icon: Package,
                  q: "Preciso ter mais de uma cozinha?",
                  a: "Não. O método foi desenvolvido para ser aplicado em uma única cozinha. Você usa o mesmo espaço e os mesmos recursos para escalar com novas marcas.",
                },
                {
                  icon: Cpu,
                  q: "O curso é online ou presencial?",
                  a: "100% online. Você pode assistir de qualquer lugar, no seu ritmo, com acesso vitalício e atualizações.",
                },
                {
                  icon: Clock,
                  q: "Em quanto tempo vejo resultado?",
                  a: "Depende da sua execução, mas a maioria dos alunos vê aumento de faturamento entre 15 e 60 dias após aplicar o método.",
                },
                {
                  icon: ChefHat,
                  q: "Sirvo se tenho restaurante pequeno?",
                  a: "Sim. O MM LAB é perfeito para pequenos e médios restaurantes que querem crescer usando a estrutura que já têm.",
                },
                {
                  icon: CreditCard,
                  q: "Qual o valor e formas de pagamento?",
                  a: "R$ 297 à vista ou 12x R$ 31,22 no cartão. Aceitamos PIX, boleto e cartão de crédito.",
                },
                {
                  icon: HeadphonesIcon,
                  q: "Tem suporte?",
                  a: "Sim. Suporte via WhatsApp + atualizações constantes do conteúdo.",
                },
                {
                  icon: InfinityIcon,
                  q: "Por quanto tempo tenho acesso?",
                  a: "Acesso vitalício. Você assiste quantas vezes quiser e recebe todas as atualizações futuras.",
                },
                {
                  icon: Smartphone,
                  q: "Ensina iFood, Rappi e 99Food?",
                  a: "Sim. Ensinamos técnicas de venda, ranqueamento e operação nos principais marketplaces de delivery.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="bg-card border border-mm-green/20 rounded-lg hover:border-mm-green transition-all px-2"
                  >
                    <AccordionTrigger className="px-4 py-4 text-left hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-mm-green/15 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-mm-green" />
                        </div>
                        <span className="font-bold text-mm-green text-sm md:text-base">
                          {item.q}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-5 pl-16 text-muted-foreground leading-relaxed text-sm md:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ 10. CTA FINAL ============ */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Sua cozinha pode faturar muito mais.{" "}
            <span className="text-mm-green">Hoje mesmo.</span>
          </h2>
          <p className="text-lg text-white/85 mb-8">
            Você tem duas opções: continuar fazendo o mesmo e esperando outro
            resultado ou aplicar o método que já está mudando a cozinha de
            centenas de donos de restaurante pelo Brasil.
          </p>
          <Button
            variant="cta-large"
            className="text-lg md:text-xl px-10 py-6 shadow-green-glow"
            onClick={goCheckout}
          >
            QUERO ENTRAR NO MM LAB →
          </Button>
          <p className="text-white/60 text-sm mt-4">
            R$ 297 à vista ou 12x R$ 31,22 • Garantia de 7 dias • Acesso vitalício
          </p>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-mm-black border-t border-mm-green/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img loading="lazy" decoding="async"
                src="/lovable-uploads/ba4e96ab-3b18-4553-a6ac-ccd37bf3ccd0.png"
                alt="MM LAB"
                className="h-16 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Metodologia criada por William Flores para donos de restaurante
                que querem multiplicar o faturamento sem abrir novas lojas.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-mm-green mb-3">Links</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-mm-green transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-mm-green transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-mm-green mb-3">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-mm-green/10 pt-6 text-center text-muted-foreground text-xs">
            <p>© 2025 MM LAB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
