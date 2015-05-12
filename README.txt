Relatório

O menu de navegação e a responsividade da página foram implementados com bootstrap e algum CSS.
O logotipo é o San Goku escrito em uma webfont.
A página é responsiva.
Clicar no projetos exibe imagens em tamanho maior via JS.
Optei por não fazer a página de mim. O personagem escolhido foi o Goku, da série Dragon Ball.
Para a exibição do mapa, ao invés de utilizar a google directions api, que retorna XML ou JSON enormes, preferi usar o que é descrito nos links abaixo (Google Maps API – Google Developer):

https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
https://developers.google.com/maps/documentation/javascript/examples/directions-simple
http://www.paulund.co.uk/how-to-use-geolocation-api-with-google-maps


Funcionalidade Extra implementada:

1 – Incorporar botões para perfis de mídias sociais (Facebook, Twitter, G+, Linkedin, Pinterest). Como não pretendo colocar informações pessoais, os botões estão linkados às páginas iniciais de cada rede social (exemplo: facebook leva para www.facebook.com, sem nenhum usuário)
2 – Transições e Animações CSS3 (Os botões de mídia sociais tem animações quando o mouse é colocado em cima)
3 – O mapa mostra locais diferentes ao longo do dia (Entre as 14 e 20 horas dos dias da semana, mostra o trabalho na UFMG. Nos outros dias, mostra o endereço de minha casa)
4 – O site usa fontes personalizadas (WebFont “Permanent Marker” da Google Fonts)
5 – O site não usa CSS sprites em si, já que icones sprites geralmente aparecem em botões de navegação e coisas do tipo, não tão presentes em sites parallax. Entretanto, ele apresenta um favicon. Não sei se pode ser considerado equivalente.
6 – Na página de Currículo são exibidos dados em forma de gráficos. Foi utilizado HighGraphics, versão customizada que Não faz uso de jQuery.
7 – Há consulta à previsão do tempo, com mensagens personalizadas. Há diversos tutoriais na internet. Foi usada a API do OpenWeatherMap.org. Diversas mensagens customizadas foram adicionadas conforme o clima. O código teve como base o encntrado nesse site: http://www.webcodegeeks.com/html5/html5-geolocation-example-weather-widget-demo/


Penalidades

Foi utilizado o Bootstrap: por sugestão de alguns colegas experientes, que me disseram que seria algo enriquecedor e que bootstrap é muito utilizado hoje em dia, optei por utilizá-lo.

Data final de entrega: 11/5/2015 às 23:50, atraso de quatro dias – Penalidade: 23,4375%

Notas: A idéia original era uma página única, mas desisti no último momento... O parallax sugerido não fica bem no celular.
Por outro lado, a versão parallax de página única tem também implementada a Versão Amigável de Impressão
