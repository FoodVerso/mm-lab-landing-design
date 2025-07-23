import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, DollarSign, Lightbulb, Package, Rocket, TrendingUp, Users, Star, CheckCircle, Play, Instagram, MessageCircle, Youtube } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import chefKitchen from "@/assets/chef-multibrand-kitchen.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-mm-dark-gray overflow-hidden">
        <div className="absolute inset-0 bg-mm-black/30"></div>
        
        {/* Tech Background Elements */}
        <div className="absolute inset-0 opacity-20 my-0 px-0 py-0 mx-0">
          <div className="absolute top-10 left-10 w-32 h-20 border border-mm-green/30 rounded"></div>
          <div className="absolute top-20 right-20 w-24 h-16 border border-mm-red/30 rounded"></div>
          <div className="absolute bottom-32 left-20 w-40 h-24 border border-mm-green/20 rounded"></div>
          <div className="absolute bottom-20 right-32 w-28 h-20 border border-mm-red/20 rounded"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-mm-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-mm-red rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-mm-green rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            
            {/* Logo */}
            <div className="mb-8">
              <img src="/lovable-uploads/750e1df2-afde-452b-b3e9-26c460dee47f.png" alt="MM LAB Logo" className="w-64 h-auto mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Transforme sua cozinha em uma <span className="text-mm-green">máquina de lucro</span> com o método Multimarcas
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              O curso que já ajudou donos de restaurantes a dobrarem e até triplicarem o faturamento sem abrir novas lojas.
            </p>
            
            <div className="flex justify-center">
              <Button variant="cta-large" size="lg" className="text-lg px-10 py-5">
                Garanta Sua Vaga
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* William Flores Introduction Section */}
      <section className="bg-gradient-to-b from-mm-dark-gray to-mm-black/80 mx-0 my-0 px-0 py-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative">
              {/* Tech Elements Around Photo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-mm-green rounded border-dashed animate-spin"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 border-2 border-mm-red rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-6 w-10 h-6 border border-mm-green/50 rounded"></div>
              <div className="absolute -bottom-2 -right-4 w-6 h-10 border border-mm-red/50 rounded"></div>
              
              {/* Main Photo Container */}
              <div className="relative p-2 bg-gradient-to-br from-mm-green/10 to-mm-red/10 rounded-2xl backdrop-blur-sm border border-mm-green/20 shadow-green-glow">
                {/* Image that projects out of the container */}
                <div className="relative -m-8 z-10">
                  <img src="/lovable-uploads/b07bc6f2-f3ce-4050-a7c7-2db37f5fcd32.png" alt="William Flores - Criador do MM LAB" className="w-96 h-96 object-contain rounded-xl shadow-2xl shadow-mm-green/20 hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Name Tag */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-mm-black/90 backdrop-blur-sm rounded-full border border-mm-green/30 z-20 my-[10px] mx-[66px] px-[50px] py-[6px]">
                  <p className="text-mm-green font-bold mx-[7px] my-[5px] px-[28px] py-px text-lg">William Flores</p>
                  <p className="text-muted-foreground text-sm text-center px-0 my-0 py-0 mx-0">Criador do MM LAB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 bg-gradient-to-b from-mm-black/80 to-mm-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-mixed bg-clip-text text-transparent">
              O Que é o MM LAB?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aprenda a operar múltiplas marcas na mesma cozinha e escalar seu faturamento usando o método que revolucionou o delivery no Brasil.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-mm-green/20 hover:border-mm-green hover:shadow-green-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Rocket className="h-16 w-16 text-mm-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-mm-green">Escalabilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Venda mais sem novos custos fixos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-red/20 hover:border-mm-red hover:shadow-red-glow transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Package className="h-16 w-16 text-mm-red mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-mm-red">Otimização de cozinha</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Explore novos nichos usando a mesma cozinha.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-16 w-16 text-mm-green mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-mm-green">Estratégia Completa</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Do conceito à execução, passo a passo.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <img src="/lovable-uploads/caf4f0b2-58a7-4ca9-ae2f-02031c3bd018.png" alt="Evento MM LAB - Cozinhas Multimarcas" className="rounded-lg shadow-card-mm max-w-4xl w-full" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-mm-dark-gray to-mm-black/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mm-green">
              Resultados Reais
            </h2>
          </div>

          <div className="grid gap-8">
            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-6">
                <img src="/lovable-uploads/af32416f-fd39-4027-999c-5dce6c4b9b04.png" alt="Resultado financeiro do aplicativo iFood" className="w-full h-auto rounded-lg mb-4 shadow-lg" />
                <p className="text-center text-muted-foreground font-medium">
                  Marca de comida com 12 dias de abertura
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-6">
                <img src="/lovable-uploads/eef31798-8226-4275-8b3d-8a3e23249200.png" alt="Açaiteca - Loja de açaí do aluno Daniel" className="w-full h-auto rounded-lg mb-4 shadow-lg" />
                <p className="text-center text-muted-foreground font-medium">
                  Aluno Daniel vendia doces e bolos e após implantar o método criou uma marca de açaí na mesma cozinha
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300 transform hover:scale-105 shadow-green-glow hover:shadow-lg w-full">
              <CardContent className="p-4 md:p-8">
                <div className="max-w-2xl mx-auto">
                  <img src="/lovable-uploads/1a6fcfd7-2916-4517-bf76-f0e112845dc8.png" alt="Will The Burguer - Dashboard de vendas com 3 lojas" className="w-full h-auto rounded-lg mb-4 md:mb-6 shadow-2xl border border-mm-green/30" />
                  <p className="text-center text-muted-foreground font-bold text-base md:text-lg bg-gradient-mixed bg-clip-text text-transparent">
                    ⭐ Criei 3 lojas dentro da mesma cozinha, resultado de 30 dias apenas no iFood ⭐
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section - Futuristic Circle Design */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-emerald-500/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white font-inter">
              5 Módulos de <span className="text-emerald-400">Domínio</span>
            </h2>
            
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-0">
            {/* Central Flywheel Design */}
            <div className="relative flex-1">
              {/* Outer Energy Ring */}
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Spinning Energy Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-emerald-400/30 animate-spin" style={{
                animationDuration: '10s'
              }}></div>
                <div className="absolute inset-4 rounded-full border-2 border-emerald-400/20 animate-spin" style={{
                animationDuration: '8s',
                animationDirection: 'reverse'
              }}></div>
                
                {/* Glow Effects */}
                <div className="absolute inset-0 rounded-full bg-emerald-400/5 blur-2xl animate-pulse"></div>
                <div className="absolute inset-8 rounded-full bg-emerald-400/10 blur-xl animate-pulse" style={{
                animationDelay: '1s'
              }}></div>

                {/* Center Core - MM LAB */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black border-4 border-emerald-400 rounded-full shadow-lg flex items-center justify-center z-10">
                  <img src="/lovable-uploads/e2a75c12-5c2c-49b5-9bd7-ead33299042c.png" alt="MM LAB Logo" className="w-20 h-20 object-contain" />
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping mx-[3px] my-[2px]"></div>
                </div>

                {/* Module Segments - Better positioned in a perfect circle */}
                {/* Módulo 1 - Top (12 o'clock) */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-gray-900/95 border-2 border-emerald-400/60 rounded-xl backdrop-blur-sm hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-500 group cursor-pointer">
                  <div className="p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-sm font-bold text-emerald-400 mb-1 group-hover:text-white transition-colors">MÓDULO 1</div>
                    <div className="text-xs text-gray-300 leading-tight">CONCEITO<br />MULTI-MARCAS</div>
                  </div>
                </div>

                {/* Módulo 2 - Right (3 o'clock) */}
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 w-36 h-24 bg-gray-900/95 border-2 border-emerald-400/60 rounded-xl backdrop-blur-sm hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-500 group cursor-pointer">
                  <div className="p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-sm font-bold text-emerald-400 mb-1 group-hover:text-white transition-colors">MÓDULO 2</div>
                    <div className="text-xs text-gray-300 leading-tight">CONTABILIDADE<br />INTELIGENTE</div>
                  </div>
                </div>

                {/* Módulo 3 - Bottom Right (4:30 o'clock) */}
                <div className="absolute bottom-8 right-24 w-36 h-24 bg-gray-900/95 border-2 border-emerald-400/60 rounded-xl backdrop-blur-sm hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-500 group cursor-pointer">
                  <div className="p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-sm font-bold text-emerald-400 mb-1 group-hover:text-white transition-colors">MÓDULO 3</div>
                    <div className="text-xs text-gray-300 leading-tight">SISTEMAS E<br />FERRAMENTAS</div>
                  </div>
                </div>

                {/* Módulo 4 - Bottom Left (7:30 o'clock) */}
                <div className="absolute bottom-8 left-24 w-36 h-24 bg-gray-900/95 border-2 border-emerald-400/60 rounded-xl backdrop-blur-sm hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-500 group cursor-pointer">
                  <div className="p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-sm font-bold text-emerald-400 mb-1 group-hover:text-white transition-colors">MÓDULO 4</div>
                    <div className="text-xs text-gray-300 leading-tight">VENDAS<br />MULTI-MARCAS</div>
                  </div>
                </div>

                {/* Módulo Bônus - Left (9 o'clock) */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 w-36 h-24 bg-gray-900/95 border-2 border-emerald-400/60 rounded-xl backdrop-blur-sm hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-500 group cursor-pointer">
                  <div className="p-4 text-center h-full flex flex-col justify-center">
                    <div className="text-sm font-bold text-emerald-400 mb-1 group-hover:text-white transition-colors">BÔNUS</div>
                    <div className="text-xs text-gray-300 leading-tight">MÓDULO<br />EXTRA</div>
                  </div>
                </div>

                {/* Energy Connections - Improved lines */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Lines from center to each module */}
                  <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-t from-emerald-400/60 to-transparent transform -translate-x-1/2 -translate-y-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 h-px w-32 bg-gradient-to-r from-emerald-400/60 to-transparent transform -translate-y-1/2 animate-pulse" style={{
                  animationDelay: '1s'
                }}></div>
                  <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-emerald-400/60 to-transparent transform -translate-x-1/2 translate-y-4 rotate-45 animate-pulse" style={{
                  animationDelay: '2s'
                }}></div>
                  <div className="absolute top-1/2 left-1/2 w-px h-24 bg-gradient-to-b from-emerald-400/60 to-transparent transform -translate-x-1/2 translate-y-4 -rotate-45 animate-pulse" style={{
                  animationDelay: '3s'
                }}></div>
                  <div className="absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-t from-emerald-400/60 to-transparent transform -translate-x-1/2 -translate-y-8 -rotate-45 animate-pulse" style={{
                  animationDelay: '4s'
                }}></div>
                </div>
              </div>
            </div>

            {/* William Flores Image - Integrated with flywheel */}
            <div className="relative flex-1 lg:max-w-md">
              <div className="relative">
                {/* Background glow for image */}
                <div className="absolute -inset-12 bg-gradient-to-r from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
                
                {/* Main image */}
                
                
                {/* Decorative elements around image */}
                <div className="absolute top-10 right-10 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-20 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{
                animationDelay: '2s'
              }}></div>
                <div className="absolute top-1/3 left-5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" style={{
                animationDelay: '4s'
              }}></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-300 italic max-w-4xl mx-auto leading-relaxed">Ou você usa o multi-marcas antes que todo mundo descubra essa técnica ou você verá seu concorrente te atropelando nos proximos meses!</p>
          </div>
        </div>

        {/* Additional floating particles */}
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-30" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping opacity-30" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-30" style={{
        animationDelay: '5s'
      }}></div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-mm-dark-gray to-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mm-green">CONDIÇÃO ESPECIAL</h2>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="bg-card border-2 border-mm-green shadow-green-glow">
              <CardContent className="p-12 text-center">
                <div className="bg-mm-red text-white px-4 py-2 rounded-full text-sm font-bold mb-8 inline-block shadow-red-glow">
                  Lote Promocional – Últimas Vagas
                </div>
                
                <div className="mb-8">
                  <div className="text-xl text-muted-foreground mb-2">
                    <span className="line-through">R$ 194,00</span>
                  </div>
                  <div className="text-6xl font-bold text-mm-green mb-2">R$ 97</div>
                  <div className="text-xl text-mm-red font-bold mb-4">50% OFF</div>
                  <p className="text-muted-foreground">Acesso vitalício + atualizações grátis</p>
                </div>

                <Button variant="cta-large" className="w-full text-xl py-6 mb-6">
                  Quero Garantir Minha Vaga
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-mm-green" />
                  Garantia de 7 dias
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto Para <span className="text-mm-green">Escalar Seu Restaurante</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Garanta sua vaga e faça sua cozinha trabalhar 100% do tempo.
          </p>
          <Button variant="cta-large" className="text-xl px-12 py-6 shadow-green-glow hover:shadow-red-glow">
            Garanta Sua Vaga Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mm-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <img src="/lovable-uploads/ba4e96ab-3b18-4553-a6ac-ccd37bf3ccd0.png" alt="MM LAB" className="h-20 w-auto mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                MM LAB é uma metodologia criada por William Flores para donos de restaurantes que querem sair do operacional e multiplicar o faturamento.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-mm-green">Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-mm-green transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-mm-green transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-mm-green transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-mm-green">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-mm-green transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-mm-green/20 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MM LAB. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;