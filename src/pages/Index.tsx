import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, DollarSign, Lightbulb, Package, Rocket, TrendingUp, Users, Star, CheckCircle, Play, Instagram, MessageCircle, Youtube } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import chefKitchen from "@/assets/chef-multibrand-kitchen.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-mm-dark-gray overflow-hidden"
      >
        <div className="absolute inset-0 bg-mm-black/30"></div>
        
        {/* Tech Background Elements */}
        <div className="absolute inset-0 opacity-20">
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
            <div className="mb-8">
              <img src="/lovable-uploads/ba4e96ab-3b18-4553-a6ac-ccd37bf3ccd0.png" alt="MM LAB" className="h-24 md:h-32 w-auto mx-auto" />
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Transforme sua cozinha em uma <span className="text-mm-green">máquina de lucro</span> com o método Multimarcas
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              O curso que já ajudou donos de restaurantes a dobrarem e até triplicarem o faturamento sem abrir novas lojas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta-large" size="lg" className="text-lg px-10 py-5">
                Garanta Sua Vaga
              </Button>
              <Button variant="red-outline" size="lg" className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Assista ao vídeo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* William Flores Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-mm-dark-gray to-mm-black/80">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative">
              {/* Tech Elements Around Photo */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-mm-green rounded border-dashed animate-spin"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 border-2 border-mm-red rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-6 w-10 h-6 border border-mm-green/50 rounded"></div>
              <div className="absolute -bottom-2 -right-4 w-6 h-10 border border-mm-red/50 rounded"></div>
              
              {/* Main Photo Container */}
              <div className="relative p-4 bg-gradient-to-br from-mm-green/10 to-mm-red/10 rounded-2xl backdrop-blur-sm border border-mm-green/20 shadow-green-glow">
                <img 
                  src="/lovable-uploads/b07bc6f2-f3ce-4050-a7c7-2db37f5fcd32.png" 
                  alt="William Flores - Criador do MM LAB" 
                  className="w-80 h-80 object-contain rounded-xl shadow-lg"
                />
                
                {/* Name Tag */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-mm-black/90 backdrop-blur-sm px-6 py-3 rounded-full border border-mm-green/30">
                  <p className="text-mm-green font-bold text-lg">William Flores</p>
                  <p className="text-muted-foreground text-sm text-center">Criador do MM LAB</p>
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
            <img 
              src={chefKitchen} 
              alt="Chef trabalhando com múltiplas marcas" 
              className="rounded-lg shadow-card-mm max-w-4xl w-full"
            />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mm-green fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "Com o MM LAB faturei 30k a mais em 1 mês com as mesmas pessoas e cozinha."
                </p>
                <div className="border-t border-mm-green/20 pt-4">
                  <p className="font-semibold text-mm-green">João Silva</p>
                  <p className="text-muted-foreground text-sm">Dono de hamburgueria</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mm-green fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "Achei que era impossível até ver o método em ação."
                </p>
                <div className="border-t border-mm-green/20 pt-4">
                  <p className="font-semibold text-mm-green">Maria Souza</p>
                  <p className="text-muted-foreground text-sm">Delivery de comida brasileira</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-mm-green fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "Triplicamos o faturamento em 6 meses sem contratar ninguém novo."
                </p>
                <div className="border-t border-mm-green/20 pt-4">
                  <p className="font-semibold text-mm-green">Carlos Pereira</p>
                  <p className="text-muted-foreground text-sm">Proprietário de pizzaria</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-gradient-to-b from-mm-black/90 to-mm-dark-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mm-green">
              O Que Você Vai Aprender
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-mm-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-mm-green">Módulo 1 – Conceito de Multi-Marcas</h3>
                <p className="text-muted-foreground">Entenda a estratégia por trás do método que revoluciona restaurantes.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-mm-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-mm-green">Módulo 2 – Contabilidade Inteligente</h3>
                <p className="text-muted-foreground">Organize suas finanças para múltiplas marcas de forma eficiente.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-mm-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-mm-green">Módulo 3 – Sistemas e Ferramentas</h3>
                <p className="text-muted-foreground">As melhores ferramentas para automatizar sua operação.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-mm-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-mm-green">Módulo 4 – Vendas e Escala</h3>
                <p className="text-muted-foreground">Estratégias para maximizar vendas em cada marca.</p>
              </div>
            </div>


            <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-mm-green/20 hover:border-mm-green transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-mm-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-mm-green">Acesso Vitalício</h3>
                <p className="text-muted-foreground">Conteúdo sempre disponível com atualizações gratuitas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-mm-dark-gray to-mm-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-mm-green">
              Invista no seu Restaurante
            </h2>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="bg-card border-2 border-mm-green shadow-green-glow">
              <CardContent className="p-12 text-center">
                <div className="bg-mm-red text-white px-4 py-2 rounded-full text-sm font-bold mb-8 inline-block shadow-red-glow">
                  Lote Promocional – Últimas Vagas
                </div>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold text-mm-green mb-2">R$ 197</div>
                  <div className="text-xl text-muted-foreground mb-4">ou 12x de R$ 97,00</div>
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
    </div>
  );
};

export default Index;