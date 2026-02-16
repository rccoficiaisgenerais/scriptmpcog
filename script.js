const templates = {
    votacao: {
        title: "Votação dos Melhores Oficiais",
        topic: "https://www.policiarcc.com/t32831-",
        description: "Configure os parâmetros abaixo para gerar o código final.",
        hasForm: true,
        bbcode: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]VOTAÇÃO DOS MELHORES OFICIAIS DA QUINZENA[/b][/size][/color][/td][/tr][/table]

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] apresenta mais uma edição dos Melhores Oficiais da Quinzena. A votação terá duração de [b]48 horas[/b], sendo permitida a participação de todos os policiais até às [b]23h59BR[/b] do dia [b]{{prazo}}[/b].

[url={{link}}][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 300px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]FORMULÁRIO DE VOTAÇÃO[/b]
[size=11]Clique aqui para votar.[/size][/color][/td][/tr][/table][/url]
[table  style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 2%;" bgcolor="#F5F5F5"][size=14][color=#005600][b]REGRAS[/b][/color][/size]
[left][list][*]É proibido pedir votos;
[*]É proibido votar mais de uma vez;
[*]É proibido vender voto;
[*]É proibido induzir votos, inclusive sugerir em sussurro que alguém participe da votação.[/list][b]Observação:[/b] Policiais que desacatarem as regras estão passíveis de demissão.[/left][/td][/tr][/table]

[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table][/font]`
    },
    votacao_grupos: {
        title: "Votação - Envio para Companhias",
        topic: "https://www.policiarcc.com/t32831-rcc-votacao-dos-melhores-oficiais-da-quinzena",
        description: "Envie a notificação de votação para as companhias do fórum.",
        hasForm: false,
        subject: "[COG] VOTE: MELHORES OFICIAIS DA QUINZENA!",
        bbcode: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]MELHORES OFICIAIS DA QUINZENA[/b][/size][/color][/td][/tr][/table]
A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color], por meio desta mensagem privada, informa que foi iniciada a votação para os [b]Melhores Oficiais da Quinzena[/b]. É fundamental que o voto seja exercido com consciência e imparcialidade, considerando aquele que, em sua percepção, desempenha um trabalho de excelência. Uma importante gratificação está em suas mãos!
[table  style="font-weight: 500; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px;"][url=https://www.policiarcc.com/t32831-rcc-votacao-dos-melhores-oficiais-da-quinzena][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]VOTAÇÃO[/b]
[size=11]Clique aqui para acessar o tópico da votação.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table][b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table][/font]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`,
        groups: [
            { id: '10', name: 'Professores', logo: 'https://i.imgur.com/QmNWd7W.png' },
            { id: '13', name: 'Treinadores', logo: 'https://i.imgur.com/21q4Cds.png' },
            { id: '31', name: 'Escola de Formação de Executivos', logo: 'https://i.imgur.com/QQW6h8M.png' },
            { id: '5', name: 'Supervisores', logo: 'https://i.imgur.com/eAP9eT2.png' },
            { id: '3', name: 'Instrutores', logo: 'https://i.imgur.com/gqaIYwv.png' }
        ]
    },
    resultado: {
        title: "Resultado - Melhores Oficiais",
        topic: "https://www.policiarcc.com/t33075-",
        description: "Poste o resultado da votação quinzenal no tópico.",
        hasForm: true,
        bbcode: `[table style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; text-align: center; font-family: Poppins;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#F5F5F5"][tr][td style="overflow: hidden; padding: 1%"][table style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]MELHORES OFICIAIS DA QUINZENA[/b][/size][/color][/td][/tr][/table]

A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] parabeniza os oficiais que se destacaram durante a [b][color=#005600]{{quinzena}}[/color][/b] de [b][color=#005600]{{mes}}[/color][/b] de [b][color=#005600]{{ano}}[/color][/b]:

[table style="font-weight: 500; box-shadow: 0 0 0 1px #121212; border-radius: 10px; width: auto; height: auto; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%;"][table style="font-weight: 500; border-radius: 10px; width: 100%; height: auto; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 0%"][img]{{imagem}}[/img][/td][/tr][/table]

A medalha de classificação [b][color=#005600]nível II[/color][/b] está disponível por 24 horas aos primeiros colocados, encerrando-se às [b][color=#005600]{{hora}}[/color][/b] do dia [b][color=#005600]{{prazo}}[/color][/b].
[table  style="font-weight: 500; border-radius: 10px; width: 65%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 5px;"][url={{transparencia}}][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]TRANSPARÊNCIA[/b]
[size=11]Clique aqui para acessar a transparência de votos.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]

[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    },
    intimacao: {
        title: "Intimação de Sindicância",
        topic: "",
        description: "Envie a intimação de sindicância para o requerido.",
        hasForm: true,
        subject: "[COG] Intimação de Sindicância",
        bbcode: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]INTIMAÇÃO DE SINDICÂNCIA[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {{requerido}}[/b],

Representando a [color=#005600][b]Presidência do Corpo de Oficiais Generais[/b][/color], venho, por meio desta mensagem privada, informá-lo acerca da sindicância instaurada pelo militar [b]{{requerente}}[/b], em face da avaliação por você realizada. Diante disso, solicita-se a apresentação de defesa, por meio do formulário abaixo, no prazo de [b]24 horas[/b], contado do envio desta intimação.

[spoiler=Segue a acusação apresentada pelo demandante]{{fundamentacao}}[/spoiler][/justify]
[table  style="font-weight: 500; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px; padding-bottom: 1px;"][url=https://forms.gle/mB2tERZa2qaioZSh8][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]RESPONDER SINDICÂNCIA[/b]
[size=11]Clique aqui para acessar o formulário.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table][/font]`
    },
    veredito: {
        title: "Veredito de Sindicância",
        topic: "",
        description: "Envie o veredito para requerente e requerido.",
        hasForm: true,
        subject: "[COG] Veredito de Sindicância",
        bbcode: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]VEREDITO DE SINDICÂNCIA[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {{destinatario}}[/b],

Representando a [color=#005600][b]Presidência do Corpo de Oficiais Generais[/b][/color], venho, por meio desta mensagem privada, informá-lo do [b]{{veredito}}[/b] da sindicância instaurada pelo militar [b]{{requerente}}[/b].

[spoiler=Segue o parecer do Ministério do Corpo de Oficiais Generais]{{analise}}[/spoiler][/justify]

[i]Em caso de insatisfação por qualquer das partes, ressalta-se a possibilidade de enviar recurso às instâncias superiores.[/i]

[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table][/font]`
    },
    bloqueio: {
        title: "Bloqueio de Promoções",
        topic: "",
        description: "Informe os grupos sobre o bloqueio de promoções.",
        hasForm: true,
        subject: "[CDO] Promoções bloqueadas!",
        bbcode_quinzenal: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]PROMOÇÕES BLOQUEADAS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] vem, por meio desta mensagem privada, informar que nos aproximamos do período da Avaliação Quinzenal do Corpo de Oficiais. Portanto, visando preservar a relevância das opiniões a serem colhidas nesse processo, os [b]tenentes[/b] e [b]capitães[/b] ficarão com as [b]promoções bloqueadas[/b] até segunda ordem.[/justify]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; box-shadow: 0 0 0 1px #D9D9D9" bgcolor="#F5F5F5"][tr][td style="overflow: hidden; padding: 1.5%;"][color=#005600][b]•[/b][/color] Qualquer promoção envolvendo as patentes supracitadas, caso efetuada após esta notificação, será cancelada, e o responsável receberá uma advertência escrita por abandono de dever/negligência.[/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table][/font]`,
        bbcode_mensal: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]PROMOÇÕES BLOQUEADAS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] vem, por meio desta mensagem privada, informar que nos aproximamos do período da Avaliação Mensal do Corpo de Oficiais. Portanto, visando preservar a relevância das opiniões a serem colhidas nesse processo, os [b]tenentes[/b], [b]capitães[/b] e [b]coronéis[/b] ficarão com as [b]promoções bloqueadas[/b] até segunda ordem.[/justify]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; box-shadow: 0 0 0 1px #D9D9D9" bgcolor="#F5F5F5"][tr][td style="overflow: hidden; padding: 1.5%;"][color=#005600][b]•[/b][/color] Qualquer promoção envolvendo as patentes supracitadas, caso efetuada após esta notificação, será cancelada, e o responsável receberá uma advertência escrita por abandono de dever/negligência.[/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table][/font]`,
        groups: [
            { id: '272', name: 'Corpo de Oficiais Militar', logo: 'https://i.imgur.com/aJ5Qrov.png' },
            { id: '268', name: 'Especialização Intermediária', logo: 'https://i.imgur.com/q6t5IBe.png' }
        ]
    },
    desbloqueio: {
        title: "Desbloqueio de Promoções",
        topic: "",
        description: "Informe os grupos sobre o desbloqueio de promoções.",
        hasForm: true,
        subject: "[CDO] Promoções desbloqueadas!",
        bbcode: `[font=Poppins][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]PROMOÇÕES DESBLOQUEADAS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] vem, por meio desta mensagem privada, informar que o Resultado da Avaliação do Corpo de Oficiais já se encontra disponível no Diário Oficial do Corpo de Oficiais Generais.
[table  style="font-weight: 500; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px; padding-bottom: 1px;"][url=https://www.policiarcc.com/t32666-oficiais-generais-transparencia-avaliacoes-de-tenente-a-coronel][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]RESULTADO DA AVALIAÇÃO[/b]
[size=11]Clique aqui para conferir o resultado da Avaliação do Corpo de Oficiais.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table]
[b]As promoções outrora bloqueadas já podem ser realizadas normalmente[/b], à exceção dos oficiais que obtiveram desempenho abaixo da média. Estes, por sua vez, permanecerão com suas promoções bloqueadas por mais cinco dias, a fim de evitar que promoções irregulares ocorram neste período.

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; box-shadow: 0 0 0 1px #D9D9D9" bgcolor="#F5F5F5"][tr][td style="overflow: hidden; padding: 1.5%;"][color=#005600][b]•[/b][/color] Recomenda-se que os oficiais superiores façam uso das informações ali constantes para o aprimoramento de suas análises acerca dos militares, seja para fins de gratificação, punição ou manutenção de seus subalternos.[/td][/tr][/table][/justify]

[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table][/font]`,
        groups: [
            { id: '272', name: 'Corpo de Oficiais Militar', logo: 'https://i.imgur.com/aJ5Qrov.png' },
            { id: '268', name: 'Especialização Intermediária', logo: 'https://i.imgur.com/q6t5IBe.png' }
        ]
    },
    coleta_horarios: {
        title: "Coleta de Horários",
        topic: "",
        description: "Envie a solicitação de coleta de horários para o Corpo de Oficiais.",
        hasForm: true,
        subject: "[CDO] Coleta de Horários",
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]COLETA DE HORÁRIOS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] informa que se aproxima o período de avaliação do Corpo de Oficiais e, como parte desse processo, é essencial o preenchimento do formulário de coleta de sua disponibilidade de horários dentro do turno e informe possíveis alterações ocorridas durante a quinzena ou mês. Essas informações são fundamentais para que a avaliação reflita, com fidelidade e confiabilidade, a realidade do seu desempenho, garantindo o rigor e a eficácia do processo avaliativo.[/justify]

[table  style="box-shadow: 0 0 0 1px #005600; border-radius: 15px; width: 100%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 2%;" bgcolor="#F5F5F5"]Ressalta-se que [b]NÃO[/b] serão consideradas as respostas enviadas em coletas anteriores, sendo necessário preencher o formulário novamente para que suas informações adicionais constem na avaliação atual.

[table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 60%; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][url=https://docs.google.com/forms/d/e/1FAIpQLScTuPho3br01cVNfkPiijOTotDh9fFTkpK1zPwiE-YtiNhnUg/viewform][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/url][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][url=https://docs.google.com/forms/d/e/1FAIpQLScTuPho3br01cVNfkPiijOTotDh9fFTkpK1zPwiE-YtiNhnUg/viewform][color=#005600][b]FORMULÁRIO DE COLETA[/b]
[size=11]Clique aqui para registrar a sua disponibilidade.[/size][/color][/url][/td][/tr][/table]
O prazo para envio das respostas encerra-se às [b][color=#005600]{{hora}}[/color][/b] do dia [b][color=#005600]{{prazo}}[/color][/b].[/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`,
        groups: [
            { id: '272', name: 'Corpo de Oficiais Militar', logo: 'https://i.imgur.com/aJ5Qrov.png' }
        ]
    },
    aviso_avaliacao: {
        title: "Aviso de Avaliação",
        topic: "",
        description: "Envie o aviso de abertura da avaliação para o Corpo de Oficiais.",
        hasForm: true,
        subject_quinzenal: "[CDO] Avaliação Quinzenal",
        subject_mensal: "[CDO] Avaliação Mensal",
        bbcode_quinzenal: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] vem, por meio desta mensagem privada, informar que a Avaliação do Corpo de Oficiais está aberta e deverá ser respondida até às [b]23h59BR[/b] do dia [b]{{prazo}}[/b].[/justify]
[table  style="font-weight: 500; border-radius: 10px; width: 75%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://www.policiarcc.com/t32673-cdo-avaliacao-do-corpo-de-oficiais][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]AVALIAÇÃO[/b]
[size=11]Clique aqui para acessar o tópico da avaliação e suas diretrizes.[/size][/color][/td][/tr][/table][/url][/td]

[td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://www.policiarcc.com/t37495-cdo-avaliacao-do-cdo-como-faze-la][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]INSTRUÇÕES[/b]
[size=11]Clique aqui para aprender a realizar uma avaliação coerente.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table][b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`,
        bbcode_mensal: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

A Equipe do [color=#005600][b]Corpo de Oficiais Generais[/b][/color] vem, por meio desta mensagem privada, informar que a Avaliação do Corpo de Oficiais está aberta e deverá ser respondida até às [b]23h59BR[/b] do dia [b]{{prazo}}[/b].[/justify]
[table  style="font-weight: 500; border-radius: 10px; width: 75%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://www.policiarcc.com/t32673-cdo-avaliacao-do-corpo-de-oficiais][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]AVALIAÇÃO[/b]
[size=11]Clique aqui para acessar o tópico da avaliação e suas diretrizes.[/size][/color][/td][/tr][/table][/url][/td]

[td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://www.policiarcc.com/t37495-cdo-avaliacao-do-cdo-como-faze-la][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]INSTRUÇÕES[/b]
[size=11]Clique aqui para aprender a realizar uma avaliação coerente.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table][b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`,
        groups: [
            { id: '272', name: 'Corpo de Oficiais Militar', logo: 'https://i.imgur.com/aJ5Qrov.png' }
        ]
    },
    avaliacao_quinzenal: {
        title: "Avaliação Quinzenal",
        topic: "https://www.policiarcc.com/t32673-",
        description: "Poste a abertura da Avaliação Quinzenal do Corpo de Oficiais.",
        hasForm: true,
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Gmfont;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 10px"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]

[justify]A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] informa que a Avaliação do Corpo de Oficiais encontra-se aberta e deverá ser respondida até às [b]23h59[/b] do dia [b]{{prazo}}[/b], totalizando o prazo de 72 horas.[/justify]

[table style="border: none !important; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 50%; vertical-align: top;"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]TENENTES[/b][/size][/color][/font]
Os tenentes deverão ser avaliados pelo período compreendido entre [b]{{periodo_inicio}}[/b] e [b]{{periodo_fim}}[/b].

[url={{link_tenentes}}][img(150px,auto)]https://i.servimg.com/u/f49/20/56/19/76/b75e9810.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/url]
[spoiler=Aptos a avaliar][left][size=13]{{aptos_tenentes}}[/size][/left][/spoiler][/td][/tr][/table][/td]


[td style="border: none !important; padding: 10px; width: 50%; vertical-align: top;"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CAPITÃES[/b][/size][/color][/font]
Os capitães deverão ser avaliados pelo período compreendido entre [b]{{periodo_inicio}}[/b] e [b]{{periodo_fim}}[/b].

[url={{link_capitaes}}][img(150px,auto)]https://i.servimg.com/u/f49/20/56/19/76/b75e9810.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/url]
[spoiler=Aptos a avaliar][left][size=13]{{aptos_capitaes}}[/size][/left][/spoiler][/td][/tr][/table][/td][/tr]


[tr style="border: none !important;"][td style="border: none !important; padding: 10px; padding-bottom: 17px; width: 100%; vertical-align: top;" colspan="2"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][justify][color=#005600][size=15][b][u]OBSERVAÇÕES[/u]:[/b][/size][/color]

[b][color=#005600]➜[/color][/b] Compete aos capitães e coronéis com 07 dias ativos na quinzena a avaliação dos tenentes, e aos coronéis e generais, nas mesmas condições, a avaliação dos capitães;
[b][color=#005600]➜[/color][/b] Na ausência de policial a ser avaliado no respectivo turno, permanece obrigatório o envio do formulário, para fins de registro da resposta;
[b][color=#005600]➜[/color][/b] Estão isentos da responsabilidade de responder ao formulário os policiais que se encontrarem em licença. Caso o policial entre em licença após a liberação do formulário, deverá entrar em contato com a Presidência do Corpo de Oficiais Generais, informando sua impossibilidade de cumprir a obrigação. O descumprimento da presente norma, bem como a inobservância da lista de aptidão, ocasionará advertência escrita, por abandono de dever/negligência.[/justify][/td][/tr][/table][/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]

[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Gmfont; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    },
    avaliacao_mensal: {
        title: "Avaliação Mensal",
        topic: "https://www.policiarcc.com/t32673-",
        description: "Poste a abertura da Avaliação Mensal do Corpo de Oficiais (inclui Coronéis).",
        hasForm: true,
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Gmfont;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 10px"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]

[justify]A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] informa que a Avaliação do Corpo de Oficiais encontra-se aberta e deverá ser respondida até às [b]23h59[/b] do dia [b]{{prazo}}[/b], totalizando o prazo de 72 horas.[/justify]

[table style="border: none !important; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]TENENTES[/b][/size][/color][/font]
Os tenentes deverão ser avaliados pelo período compreendido entre [b]{{periodo_inicio}}[/b] e [b]{{periodo_fim}}[/b].

[url={{link_tenentes}}][img(150px,auto)]https://i.servimg.com/u/f49/20/56/19/76/b75e9810.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/url]
[spoiler=Aptos a avaliar][left][size=13]{{aptos_tenentes}}[/size][/left][/spoiler][/td][/tr][/table][/td]


[td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CAPITÃES[/b][/size][/color][/font]
Os capitães deverão ser avaliados pelo período compreendido entre [b]{{periodo_inicio}}[/b] e [b]{{periodo_fim}}[/b].

[url={{link_capitaes}}][img(150px,auto)]https://i.servimg.com/u/f49/20/56/19/76/b75e9810.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/url]
[spoiler=Aptos a avaliar][left][size=13]{{aptos_capitaes}}[/size][/left][/spoiler][/td][/tr][/table][/td]


[td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CORONÉIS[/b][/size][/color][/font]
Os coronéis deverão ser avaliados pelo período compreendido a todo o mês de [b]{{coronel_mes}}[/b] de {{coronel_ano}}.

[url={{link_coroneis}}][img(150px,auto)]https://i.servimg.com/u/f49/20/56/19/76/b75e9810.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/url]
[spoiler=Aptos a avaliar][left][size=13]{{aptos_coroneis}}[/size][/left][/spoiler][/td][/tr][/table][/td][/tr]


[tr style="border: none !important;"][td style="border: none !important; padding: 10px; padding-bottom: 17px; width: 100%; vertical-align: top;" colspan="3"][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][justify][color=#005600][size=15][b][u]OBSERVAÇÕES[/u]:[/b][/size][/color]

[b][color=#005600]➜[/color][/b] Compete aos capitães e coronéis com 07 dias ativos na quinzena a avaliação dos tenentes, e aos coronéis e generais, nas mesmas condições, a avaliação dos capitães. Por sua vez, a avaliação dos coronéis compete aos generais e marechais com 15 dias ativos no mês.
[b][color=#005600]➜[/color][/b] Na ausência de policial a ser avaliado no respectivo turno, permanece obrigatório o envio do formulário, para fins de registro da resposta;
[b][color=#005600]➜[/color][/b] Estão isentos da responsabilidade de responder ao formulário os policiais que se encontrarem em licença. Caso o policial entre em licença após a liberação do formulário, deverá entrar em contato com a Presidência do Corpo de Oficiais Generais, informando sua impossibilidade de cumprir a obrigação. O descumprimento da presente norma, bem como a inobservância da lista de aptidão, ocasionará advertência escrita, por abandono de dever/negligência.[/justify][/td][/tr][/table][/td][/tr][/table]
[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]

[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Gmfont; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    },
    resultado_quinzenal: {
        title: "Resultado Quinzenal",
        topic: "https://www.policiarcc.com/t32666-",
        description: "Poste o Resultado da Avaliação Quinzenal do Corpo de Oficiais.",
        hasForm: true,
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Gmfont;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 10px"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]

[justify]A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] informa que o resultado da Avaliação do Corpo de Oficiais, referente ao período de [b]{{periodo_inicio}}[/b] a [b]{{periodo_fim}}[/b], encontra-se disponível abaixo:[/justify]

[table style="border: none !important; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 50%; vertical-align: top;"][url={{link_tenentes}}][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]TENENTES[/b][/size][/color][/font]

[img(150px,auto)]https://i.postimg.cc/bwrD4yCv/Resultado-Av-CDO.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/td][/tr][/table][/url][/td]


[td style="border: none !important; padding: 10px; width: 50%; vertical-align: top;"][url={{link_capitaes}}][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CAPITÃES[/b][/size][/color][/font]

[img(150px,auto)]https://i.postimg.cc/bwrD4yCv/Resultado-Av-CDO.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/td][/tr][/table][/url][/td][/tr][/table]

[justify][spoiler=Observações][size=13][b]1.[/b] Ficam estabelecidos dois critérios para a utilização da TAG [CDO]:
[b]a)[/b] Para promoção, quando é necessário que a quantidade de votos para "Promoção" apresente diferença mínima de um voto em relação aos votos para "Manter". Exemplo: cinco votos para "Promoção" e quatro votos para "Manter".
[b]b)[/b] Para rebaixamento, quando é necessário que a quantidade de votos para "Rebaixamento" apresente diferença mínima de um voto em relação aos votos para "Manter". Exemplo: cinco votos para "Rebaixamento" e quatro votos para "Manter".

[b]1.1[/b] A efetivação das promoções decorrentes da avaliação ficará condicionada ao aval da Presidência do Corpo de Oficiais Generais.

[b]2.[/b] Os oficiais com média inferior a sete permanecerão com a promoção bloqueada por mais cinco dias.

[b]2.1[/b] O militar que permanecer em situação negativa após duas avaliações consecutivas será submetido à avaliação da Presidência, a qual decidirá se permanecerá na patente ou se deverá retroceder à patente anterior.

[b]3.[/b] Os destaque observará os seguintes critérios:
[b]a)[/b] O destaque deverá possuir a maior nota em sua patente, sendo avaliado por, no mínimo, três avaliadores;
[b]b)[/b] Haverá apenas um destaque por patente, sendo que o critério de desempate será o maior tempo na patente.[/size][/spoiler][/justify]

[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]

[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Gmfont; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    },
    resultado_mensal: {
        title: "Resultado Mensal",
        topic: "https://www.policiarcc.com/t32666-",
        description: "Poste o Resultado da Avaliação Mensal do Corpo de Oficiais (inclui Coronéis).",
        hasForm: true,
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Gmfont;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 10px"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]AVALIAÇÃO DO CORPO DE OFICIAIS[/b][/size][/color][/td][/tr][/table]

[justify]A Equipe do [b][color=#005600]Corpo de Oficiais Generais[/color][/b] informa que o resultado da Avaliação do Corpo de Oficiais, referente ao período de [b]{{periodo_inicio}}[/b] a [b]{{periodo_fim}}[/b] para tenentes e capitães e a todo o mês de [b]{{coronel_mes}}[/b] de {{coronel_ano}} para os coronéis, encontra-se disponível abaixo:[/justify]

[table style="border: none !important; border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][url={{link_tenentes}}][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]TENENTES[/b][/size][/color][/font]

[img(150px,auto)]https://i.postimg.cc/bwrD4yCv/Resultado-Av-CDO.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/td][/tr][/table][/url][/td]


[td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][url={{link_capitaes}}][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CAPITÃES[/b][/size][/color][/font]

[img(150px,auto)]https://i.postimg.cc/bwrD4yCv/Resultado-Av-CDO.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/td][/tr][/table][/url][/td]


[td style="border: none !important; padding: 10px; width: 33%; vertical-align: top;"][url={{link_coroneis}}][table style="border: none !important; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 10px; width: 100%; overflow: hidden; margin: 0 auto; vertical-align: top;" bgcolor="#EFEFEF"][tr style="border: none !important;"][td style="border: none !important; padding: 10px; width: 15%;"][font=Poppins][color=#005600][size=22][b]CORONÉIS[/b][/size][/color][/font]

[img(150px,auto)]https://i.postimg.cc/bwrD4yCv/Resultado-Av-CDO.png[/img]

[table style="overflow: hidden; box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25); border-radius: 50px; width: 70%; margin: 0 auto; padding: 0px;" bgcolor="#005600"][tr][td style="padding: 10px;"][size=15][color=#FFFFFF][b]RESPONDER[/b][/color][/size][/td][/tr][/table][/td][/tr][/table][/url][/td][/tr][/table]

[justify][spoiler=Observações][size=13][b]1.[/b] Ficam estabelecidos dois critérios para a utilização da TAG [CDO]:
[b]a)[/b] Para promoção, quando é necessário que a quantidade de votos para "Promoção" apresente diferença mínima de um voto em relação aos votos para "Manter". Exemplo: cinco votos para "Promoção" e quatro votos para "Manter".
[b]b)[/b] Para rebaixamento, quando é necessário que a quantidade de votos para "Rebaixamento" apresente diferença mínima de um voto em relação aos votos para "Manter". Exemplo: cinco votos para "Rebaixamento" e quatro votos para "Manter".

[b]1.1[/b] A efetivação das promoções decorrentes da avaliação ficará condicionada ao aval da Presidência do Corpo de Oficiais Generais.

[b]2.[/b] Os oficiais com média inferior a sete permanecerão com a promoção bloqueada por mais cinco dias.

[b]2.1[/b] O militar que permanecer em situação negativa após duas avaliações consecutivas será submetido à avaliação da Presidência, a qual decidirá se permanecerá na patente ou se deverá retroceder à patente anterior.

[b]3.[/b] Os destaque observará os seguintes critérios:
[b]a)[/b] O destaque deverá possuir a maior nota em sua patente, sendo avaliado por, no mínimo, três avaliadores;
[b]b)[/b] Haverá apenas um destaque por patente, sendo que o critério de desempate será o maior tempo na patente.[/size][/spoiler][/justify]

[b]Em caso de dúvidas, entre em contato com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]

[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Gmfont; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    },
    atualizacao_emblemas: {
        title: "Atualização de Emblemas",
        topic: "",
        description: "Envie a escala de atualização de emblemas para o grupo Corpo de Oficiais Generais.",
        hasForm: true,
        subject: "[COG] Atualização de Emblemas",
        groups: [
            { id: '687', name: 'Corpo de Oficiais Generais', logo: 'https://i.imgur.com/s93G0et.png' }
        ],
        bbcode: `[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden; font-family: Poppins;" bgcolor="#121212"][tr][td style="overflow: hidden; padding: 1%"][img]https://i.imgur.com/7suYBZs.png[/img]

[table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 1.5%; padding-bottom: 20px;"][table  style="font-weight: 500; border-radius: 10px; width: 100%; overflow: hidden;" bgcolor="#005600"][tr][td style="overflow: hidden; padding: 0.5%"][color=#FFFFFF][size=18][b]ESCALA DE ATUALIZAÇÃO[/b][/size][/color][/td][/tr][/table]
[justify][b]Prezado(a) {USERNAME}[/b],

Por meio desta mensagem privada, a [color=#005600][b]Equipe do Corpo de Oficiais Generais[/b][/color] divulga mais uma escala de atualização de emblemas, referente ao período de [b]{{periodo_inicio}}[/b] a [b]{{periodo_fim}}[/b]. Atente-se aos prazos para as atualizações e eventuais justificativas![/justify]
[table  style="font-weight: 500; border-radius: 10px; width: 75%; overflow: hidden; margin: 0 auto;" bgcolor="#FFFFFF"][tr][td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://docs.google.com/spreadsheets/d/1Mk0K0Qp1-yhiSwoQcCr3Anwxt_oSg3kL2UEkQ9AxD6M/edit?usp=sharing][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]ESCALA DE ATUALIZAÇÃO[/b]
[size=11]Clique aqui para acessar a escala de atualização de emblemas.[/size][/color][/td][/tr][/table][/url][/td]

[td style="overflow: hidden; padding: 15px; width: 50%; text-align: top;"][url=https://www.policiarcc.com/t32684-cog-atualizacao-de-emblemas][table style="box-shadow: 0 0 0 1px #005600; border-radius: 10px; width: 400px; overflow: hidden; margin: 0 auto;"][tr][td style="overflow: hidden; padding: 0.4%; width: 15%;" bgcolor="#005600"][img(50px,50px)]https://i.imgur.com/dnTQDPh.png[/img][/td][td style="overflow: hidden; padding: 0.8%; width: 35%;" bgcolor="#FFFFFF"][color=#005600][b]NORMATIVAS DE ATUALIZAÇÃO[/b]
[size=11]Clique aqui para verificar as normativas da atualização de emblemas.[/size][/color][/td][/tr][/table][/url][/td][/tr][/table][b]Em caso de dúvidas, entre em contato com o membro responsável ou com o Ministério do Corpo de Oficiais Generais.[/b][/td][/tr][/table][/td][/tr][/table]
[table style="font-weight: 500; overflow: hidden; border-radius: 10px; width: 250px; font-family: Poppins; color: #FFFFFF; font-size: 12px; margin: 0 auto; margin-top: -39px; position: relative; z-index: 2;"][tr style="border: none !important;"][td style="border: none !important; padding: 5px;" bgcolor="#121212"]Atenciosamente, [b]Equipe do COG.[/b][/td][/tr][/table]`
    }
};

let currentTemplate = 'votacao';
let isSending = false;

// Campos iniciam vazios - sem preenchimento automático
window.onload = () => {
    selectTemplate('votacao');
};

function toggleAvaliacaoFields() {
    const tipo = document.querySelector('input[name="tipo-avaliacao"]:checked').value;
    const camposQuinzenal = document.getElementById('campos-quinzenal');
    const camposMensal = document.getElementById('campos-mensal');

    if (tipo === 'quinzenal') {
        camposQuinzenal.classList.remove('hidden');
        camposMensal.classList.add('hidden');
    } else {
        camposQuinzenal.classList.add('hidden');
        camposMensal.classList.remove('hidden');
    }
}

function formatDate(dateValue) {
    if (!dateValue) return "A DEFINIR";
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const [year, month, day] = dateValue.split('-');
    return `${day} ${months[parseInt(month) - 1]} ${year}`;
}

function selectTemplate(key) {
    currentTemplate = key;
    const t = templates[key];

    document.getElementById('template-title').innerText = t.title;
    document.querySelector('#editor-container > div:first-child p').innerText = t.description;

    // Mostrar/esconder botão de Tópico Auxiliar baseado na existência de URL
    const topicLink = document.getElementById('topic-link');
    if (t.topic && t.topic.trim() !== '') {
        topicLink.href = t.topic;
        topicLink.classList.remove('hidden');
    } else {
        topicLink.classList.add('hidden');
    }

    // Hide all form containers
    document.querySelectorAll('[id^="form-"]').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('[id^="action-"]').forEach(el => el.classList.add('hidden'));

    // Show the selected form container with animation
    const formEl = document.getElementById(`form-${key}`);
    const actionEl = document.getElementById(`action-${key}`);
    if (formEl) {
        formEl.classList.remove('hidden', 'content-animate');
        void formEl.offsetWidth; // Force reflow
        formEl.classList.add('content-animate');
    }
    if (actionEl) {
        actionEl.classList.remove('hidden', 'content-animate');
        void actionEl.offsetWidth; // Force reflow
        actionEl.classList.add('content-animate');
    }

    // Update sidebar button styles
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('bg-[#005600]', 'text-white', 'border-[#007a00]/50', 'shadow-lg', 'shadow-[#005600]/10');
        btn.classList.add('hover:bg-white/5');
    });
    const selectedBtn = document.getElementById(`btn-${key}`);
    if (selectedBtn) {
        selectedBtn.classList.add('bg-[#005600]', 'text-white', 'border-[#007a00]/50', 'shadow-lg', 'shadow-[#005600]/10');
        selectedBtn.classList.remove('hover:bg-white/5');
    }

    // Reset progress if switching to groups template
    if (key === 'votacao_grupos') {
        resetGroupsProgress();
    }

    // Fechar sidebar no mobile após selecionar
    if (window.innerWidth < 768) {
        toggleMobileMenu(false);
    }

    // Sincronizar campos de avaliação ao voltar para a aba
    if (key === 'aviso_avaliacao') {
        toggleAvaliacaoFields();
    }
}

function generateBBCode(btn) {
    if (!validateCurrentTemplate(btn)) return;

    let result = '';
    if (currentTemplate === 'votacao') {
        result = generateVotacaoBBCode();
    } else if (currentTemplate === 'resultado') {
        result = generateResultadoVotacaoBBCode();
    }

    updateModalTopicLink(currentTemplate);
    document.getElementById('output-bbcode').value = result;

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modal.style.display = 'flex';
    modalContent.classList.remove('modal-animate');
    void modalContent.offsetWidth; // Force reflow
    modalContent.classList.add('modal-animate');
}

function generateVotacaoBBCode() {
    const template = templates.votacao;
    const link = document.getElementById('input-link').value;
    const rawDate = document.getElementById('input-prazo-date').value;
    const prazo = formatDate(rawDate);
    return template.bbcode.replace(/\{\{link\}\}/g, link).replace(/\{\{prazo\}\}/g, prazo);
}

function generateResultadoVotacaoBBCode() {
    const template = templates.resultado;
    const quinzena = document.getElementById('input-quinzena').value;
    const mes = document.getElementById('input-mes').value;
    const ano = document.getElementById('input-ano').value;
    const imagem = document.getElementById('input-imagem').value;
    const transparencia = document.getElementById('input-transparencia').value;
    const rawPrazo = document.getElementById('input-prazo-resultado').value;
    const prazo = formatDate(rawPrazo);
    const hora = document.getElementById('input-hora-prazo').value;

    return template.bbcode
        .replace(/\{\{quinzena\}\}/g, quinzena)
        .replace(/\{\{mes\}\}/g, mes)
        .replace(/\{\{ano\}\}/g, ano)
        .replace(/\{\{imagem\}\}/g, imagem)
        .replace(/\{\{transparencia\}\}/g, transparencia)
        .replace(/\{\{prazo\}\}/g, prazo)
        .replace(/\{\{hora\}\}/g, hora);
}

function generateIntimacaoBBCode() {
    const template = templates.intimacao;
    const requerente = document.getElementById('input-requerente-int').value;
    const requerido = document.getElementById('input-requerido-int').value;
    const fundamentacao = document.getElementById('input-fundamentacao').value;
    return template.bbcode
        .replace(/\{\{requerente\}\}/g, requerente)
        .replace(/\{\{requerido\}\}/g, requerido)
        .replace(/\{\{fundamentacao\}\}/g, fundamentacao);
}

function generateVereditoBBCode(destinatarioNick = 'Nickname') {
    const template = templates.veredito;
    const requerente = document.getElementById('input-requerente-ver').value;
    const veredito = document.getElementById('input-veredito').value;
    const analise = document.getElementById('input-analise').value;
    return template.bbcode
        .replace(/\{\{destinatario\}\}/g, destinatarioNick)
        .replace(/\{\{requerente\}\}/g, requerente)
        .replace(/\{\{veredito\}\}/g, veredito)
        .replace(/\{\{analise\}\}/g, analise);
}

function updateModalTopicLink(templateKey) {
    const template = templates[templateKey];
    const modalLink = document.getElementById('modal-topic-link');
    const mpUrl = "https://www.policiarcc.com/privmsg?mode=post";

    if (template.topic && template.topic.trim() !== "") {
        modalLink.href = template.topic;
        modalLink.innerHTML = `Ir para o Tópico 
                    <i class="fa-solid fa-up-right-from-square text-lg group-hover:translate-x-1 transition-transform"></i>`;
    } else {
        modalLink.href = mpUrl;
        modalLink.innerHTML = `Ir para as MPs 
                    <i class="fa-solid fa-up-right-from-square text-lg group-hover:translate-x-1 transition-transform"></i>`;
    }
}

function previewBBCode(templateKey, btn) {
    if (!validateCurrentTemplate(btn)) return;

    const template = templates[templateKey];
    let result = '';

    if (templateKey === 'votacao') {
        result = generateVotacaoBBCode();
    } else if (templateKey === 'votacao_grupos') {
        result = template.bbcode;
    } else if (templateKey === 'resultado') {
        result = generateResultadoVotacaoBBCode();
    } else if (templateKey === 'intimacao') {
        result = generateIntimacaoBBCode();
    } else if (templateKey === 'veredito') {
        result = generateVereditoBBCode();
    } else if (templateKey === 'bloqueio') {
        const tipoBloqueio = document.querySelector('input[name="tipo-bloqueio"]:checked').value;
        if (tipoBloqueio === 'quinzenal') {
            result = template.bbcode_quinzenal;
        } else {
            result = template.bbcode_mensal;
        }
    } else if (templateKey === 'desbloqueio') {
        result = template.bbcode;
    } else if (templateKey === 'coleta_horarios') {
        const rawPrazo = document.getElementById('input-prazo-coleta').value;
        const hora = document.getElementById('input-hora-coleta').value;
        const prazo = formatDate(rawPrazo);
        result = template.bbcode
            .replace(/\{\{prazo\}\}/g, prazo)
            .replace(/\{\{hora\}\}/g, hora);
    } else if (templateKey === 'aviso_avaliacao') {
        const tipoAvaliacao = document.querySelector('input[name="tipo-avaliacao"]:checked').value;
        if (tipoAvaliacao === 'quinzenal') {
            const rawPrazo = document.getElementById('input-avaliacao-fim').value;
            const prazo = formatDate(rawPrazo);
            result = template.bbcode_quinzenal.replace(/\{\{prazo\}\}/g, prazo);
        } else {
            const rawPrazo = document.getElementById('input-avaliacao-mensal-fim').value;
            const prazo = formatDate(rawPrazo);
            result = template.bbcode_mensal.replace(/\{\{prazo\}\}/g, prazo);
        }
    } else if (templateKey === 'avaliacao_quinzenal') {
        result = generateAvaliacaoQuinzenalBBCode();
    } else if (templateKey === 'avaliacao_mensal') {
        result = generateAvaliacaoMensalBBCode();
    } else if (templateKey === 'resultado_quinzenal') {
        result = generateResultadoQuinzenalBBCode();
    } else if (templateKey === 'resultado_mensal') {
        result = generateResultadoMensalBBCode();
    } else if (templateKey === 'atualizacao_emblemas') {
        result = generateAtualizacaoEmblemasBBCode();
    }

    updateModalTopicLink(templateKey);
    document.getElementById('output-bbcode').value = result;

    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modal.style.display = 'flex';
    modalContent.classList.remove('modal-animate');
    void modalContent.offsetWidth; // Force reflow
    modalContent.classList.add('modal-animate');
}

function generateAvaliacaoQuinzenalBBCode() {
    const template = templates.avaliacao_quinzenal;

    const rawInicio = document.getElementById('input-aq-inicio').value;
    const rawFim = document.getElementById('input-aq-fim').value;
    const rawPrazo = document.getElementById('input-aq-prazo').value;
    const linkTenentes = document.getElementById('input-aq-link-tenentes').value;
    const linkCapitaes = document.getElementById('input-aq-link-capitaes').value;
    const aptosTenentes = document.getElementById('input-aq-aptos-tenentes').value;
    const aptosCapitaes = document.getElementById('input-aq-aptos-capitaes').value;

    const periodoInicio = formatDate(rawInicio);
    const periodoFim = formatDate(rawFim);
    const prazo = formatDate(rawPrazo);

    return template.bbcode
        .replace(/\{\{periodo_inicio\}\}/g, periodoInicio)
        .replace(/\{\{periodo_fim\}\}/g, periodoFim)
        .replace(/\{\{prazo\}\}/g, prazo)
        .replace(/\{\{link_tenentes\}\}/g, linkTenentes)
        .replace(/\{\{link_capitaes\}\}/g, linkCapitaes)
        .replace(/\{\{aptos_tenentes\}\}/g, aptosTenentes)
        .replace(/\{\{aptos_capitaes\}\}/g, aptosCapitaes);
}

function generateAvaliacaoMensalBBCode() {
    const template = templates.avaliacao_mensal;

    const rawInicio = document.getElementById('input-am-inicio').value;
    const rawFim = document.getElementById('input-am-fim').value;
    const rawPrazo = document.getElementById('input-am-prazo').value;
    const coronelMes = document.getElementById('input-am-coronel-mes').value;
    const coronelAno = document.getElementById('input-am-coronel-ano').value;
    const linkTenentes = document.getElementById('input-am-link-tenentes').value;
    const linkCapitaes = document.getElementById('input-am-link-capitaes').value;
    const linkCoroneis = document.getElementById('input-am-link-coroneis').value;
    const aptosTenentes = document.getElementById('input-am-aptos-tenentes').value;
    const aptosCapitaes = document.getElementById('input-am-aptos-capitaes').value;
    const aptosCoroneis = document.getElementById('input-am-aptos-coroneis').value;

    const periodoInicio = formatDate(rawInicio);
    const periodoFim = formatDate(rawFim);
    const prazo = formatDate(rawPrazo);

    return template.bbcode
        .replace(/\{\{periodo_inicio\}\}/g, periodoInicio)
        .replace(/\{\{periodo_fim\}\}/g, periodoFim)
        .replace(/\{\{prazo\}\}/g, prazo)
        .replace(/\{\{coronel_mes\}\}/g, coronelMes)
        .replace(/\{\{coronel_ano\}\}/g, coronelAno)
        .replace(/\{\{link_tenentes\}\}/g, linkTenentes)
        .replace(/\{\{link_capitaes\}\}/g, linkCapitaes)
        .replace(/\{\{link_coroneis\}\}/g, linkCoroneis)
        .replace(/\{\{aptos_tenentes\}\}/g, aptosTenentes)
        .replace(/\{\{aptos_capitaes\}\}/g, aptosCapitaes)
        .replace(/\{\{aptos_coroneis\}\}/g, aptosCoroneis);
}

function generateResultadoQuinzenalBBCode() {
    const template = templates.resultado_quinzenal;

    const rawInicio = document.getElementById('input-rq-inicio').value;
    const rawFim = document.getElementById('input-rq-fim').value;
    const linkTenentes = document.getElementById('input-rq-link-tenentes').value;
    const linkCapitaes = document.getElementById('input-rq-link-capitaes').value;

    const periodoInicio = formatDate(rawInicio);
    const periodoFim = formatDate(rawFim);

    return template.bbcode
        .replace(/\{\{periodo_inicio\}\}/g, periodoInicio)
        .replace(/\{\{periodo_fim\}\}/g, periodoFim)
        .replace(/\{\{link_tenentes\}\}/g, linkTenentes)
        .replace(/\{\{link_capitaes\}\}/g, linkCapitaes);
}

function generateResultadoMensalBBCode() {
    const template = templates.resultado_mensal;

    const rawInicio = document.getElementById('input-rm-inicio').value;
    const rawFim = document.getElementById('input-rm-fim').value;
    const coronelMes = document.getElementById('input-rm-coronel-mes').value;
    const coronelAno = document.getElementById('input-rm-coronel-ano').value;
    const linkTenentes = document.getElementById('input-rm-link-tenentes').value;
    const linkCapitaes = document.getElementById('input-rm-link-capitaes').value;
    const linkCoroneis = document.getElementById('input-rm-link-coroneis').value;

    const periodoInicio = formatDate(rawInicio);
    const periodoFim = formatDate(rawFim);

    return template.bbcode
        .replace(/\{\{periodo_inicio\}\}/g, periodoInicio)
        .replace(/\{\{periodo_fim\}\}/g, periodoFim)
        .replace(/\{\{coronel_mes\}\}/g, coronelMes)
        .replace(/\{\{coronel_ano\}\}/g, coronelAno)
        .replace(/\{\{link_tenentes\}\}/g, linkTenentes)
        .replace(/\{\{link_capitaes\}\}/g, linkCapitaes)
        .replace(/\{\{link_coroneis\}\}/g, linkCoroneis);
}

function generateAtualizacaoEmblemasBBCode() {
    const template = templates.atualizacao_emblemas;

    const rawInicio = document.getElementById('input-emblemas-inicio').value;
    const rawFim = document.getElementById('input-emblemas-fim').value;

    const periodoInicio = formatDate(rawInicio);
    const periodoFim = formatDate(rawFim);

    return template.bbcode
        .replace(/\{\{periodo_inicio\}\}/g, periodoInicio)
        .replace(/\{\{periodo_fim\}\}/g, periodoFim);
}

function validateCurrentTemplate(btn) {
    const fieldsMap = {
        'votacao': ['input-link', 'input-prazo-date'],
        'resultado': ['input-quinzena', 'input-mes', 'input-ano', 'input-imagem', 'input-transparencia', 'input-prazo-resultado', 'input-hora-prazo'],
        'intimacao': ['input-requerente-int', 'input-requerido-int', 'input-fundamentacao'],
        'veredito': ['input-requerente-ver', 'input-requerido-ver', 'input-analise', 'input-veredito'],
        'coleta_horarios': ['input-prazo-coleta', 'input-hora-coleta'],
        'aviso_avaliacao': [], // Especial
        'avaliacao_quinzenal': ['input-aq-inicio', 'input-aq-fim', 'input-aq-prazo', 'input-aq-link-tenentes', 'input-aq-link-capitaes', 'input-aq-aptos-tenentes', 'input-aq-aptos-capitaes'],
        'avaliacao_mensal': ['input-am-inicio', 'input-am-fim', 'input-am-prazo', 'input-am-link-tenentes', 'input-am-link-capitaes', 'input-am-link-coroneis', 'input-am-aptos-tenentes', 'input-am-aptos-capitaes', 'input-am-aptos-coroneis', 'input-am-coronel-mes', 'input-am-coronel-ano'],
        'resultado_quinzenal': ['input-rq-inicio', 'input-rq-fim', 'input-rq-link-tenentes', 'input-rq-link-capitaes'],
        'resultado_mensal': ['input-rm-inicio', 'input-rm-fim', 'input-rm-link-tenentes', 'input-rm-link-capitaes', 'input-rm-link-coroneis', 'input-rm-coronel-mes', 'input-rm-coronel-ano'],
        'atualizacao_emblemas': ['input-emblemas-inicio', 'input-emblemas-fim']
    };

    let fields = fieldsMap[currentTemplate] || [];

    // Validação especial para Aviso de Avaliação
    if (currentTemplate === 'aviso_avaliacao') {
        const tipo = document.querySelector('input[name="tipo-avaliacao"]:checked').value;
        fields = (tipo === 'quinzenal')
            ? ['input-avaliacao-fim']
            : ['input-avaliacao-mensal-fim'];
    }

    let isValid = true;
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        if (!el.value || el.value.trim() === '') {
            el.classList.add('invalid-field');
            isValid = false;

            // Remover erro ao digitar
            el.oninput = () => el.classList.remove('invalid-field');
        } else {
            el.classList.remove('invalid-field');
        }
    });

    if (!isValid && btn) {
        btn.classList.add('shake');
        setTimeout(() => btn.classList.remove('shake'), 400);

        // Feedback tátil simples se disponível
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
    }

    return isValid;
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.classList.remove('modal-animate');
    modalContent.classList.add('modal-animate-out');

    // Aguarda a animação de saída (300ms) antes de esconder o modal
    setTimeout(() => {
        modal.style.display = 'none';
        modalContent.classList.remove('modal-animate-out');
    }, 300);
}

function copyCode() {
    const copyText = document.getElementById('output-bbcode');
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        const msg = document.getElementById('copy-msg');

        // Reset animation classes
        msg.classList.remove('hidden', 'toast-animate-out');
        msg.classList.add('toast-animate-in');

        // After 2 seconds, animate out
        setTimeout(() => {
            msg.classList.remove('toast-animate-in');
            msg.classList.add('toast-animate-out');

            // Hide after animation completes
            setTimeout(() => {
                msg.classList.add('hidden');
                msg.classList.remove('toast-animate-out');
            }, 300);
        }, 2000);
    } catch (err) {
        console.error('Falha ao copiar', err);
    }
}

// Função unificada para postar em tópicos
async function postarNoForum(tipo) {
    if (isSending) return;
    const btnMap = {
        'resultado': { btn: 'btn-post-resultado', text: 'btn-post-text', topic: '33075' },
        'avaliacao_quinzenal': { btn: 'btn-post-aq', text: 'btn-aq-text', topic: '32673' },
        'avaliacao_mensal': { btn: 'btn-post-am', text: 'btn-am-text', topic: '32673' },
        'resultado_quinzenal': { btn: 'btn-post-rq', text: 'btn-rq-text', topic: '32666' },
        'resultado_mensal': { btn: 'btn-post-rm', text: 'btn-rm-text', topic: '32666' }
    };

    const config = btnMap[tipo];
    const btn = document.getElementById(config.btn);

    if (!validateCurrentTemplate(btn)) return;

    const btnText = document.getElementById(config.text);
    const originalText = btnText.innerText;

    btn.disabled = true;
    isSending = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btnText.innerText = 'Postando...';

    const bbcode = buildBBCode(tipo);
    const topicoId = templates[tipo].topic.match(/\/t(\d+)/)?.[1] || config.topic;

    try {
        const formData = new FormData();
        formData.append('t', topicoId);
        formData.append('message', bbcode);
        formData.append('mode', 'reply');
        formData.append('post', '1');

        const response = await fetch('/post', { method: 'POST', body: formData });

        if (response.ok) {
            btnText.innerText = 'Postado com Sucesso!';
            btn.classList.add('bg-green-600');

            // Celebrate!
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#005600', '#00c800', '#ffffff']
            });

            setTimeout(() => {
                btn.disabled = false;
                isSending = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-green-600');
                btnText.innerText = originalText;
            }, 3000);
        } else { throw new Error(); }
    } catch (error) {
        btnText.innerText = 'Erro! Tente novamente';
        btn.classList.add('bg-red-600');
        setTimeout(() => {
            btn.disabled = false;
            isSending = false;
            btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-red-600');
            btnText.innerText = originalText;
        }, 3000);
    }
}

// Helper para centralizar a geração de BBCode
function buildBBCode(tipo) {
    switch (tipo) {
        case 'resultado': return generateResultadoVotacaoBBCode();
        case 'avaliacao_quinzenal': return generateAvaliacaoQuinzenalBBCode();
        case 'avaliacao_mensal': return generateAvaliacaoMensalBBCode();
        case 'resultado_quinzenal': return generateResultadoQuinzenalBBCode();
        case 'resultado_mensal': return generateResultadoMensalBBCode();
        default: return '';
    }
}

// Função unificada para enviar para grupos no fórum
async function enviarMensagemGrupo(tipo) {
    if (isSending) return;
    const configMap = {
        'bloqueio': { btn: 'btn-send-bloqueio', text: 'btn-bloqueio-text', prog: 'bloqueio-progress', bar: 'bloqueio-progress-bar', ptext: 'bloqueio-progress-text', status: 'bloqueio-status', type: 'bloqueio' },
        'desbloqueio': { btn: 'btn-send-desbloqueio', text: 'btn-desbloqueio-text', prog: 'desbloqueio-progress', bar: 'desbloqueio-progress-bar', ptext: 'desbloqueio-progress-text', status: 'desbloqueio-status', type: 'desbloqueio' },
        'coleta_horarios': { btn: 'btn-send-coleta', text: 'btn-coleta-text', prog: 'coleta-progress', bar: 'coleta-progress-bar', ptext: 'coleta-progress-text', status: 'coleta-status', type: 'coleta' },
        'aviso_avaliacao': { btn: 'btn-send-aviso', text: 'btn-aviso-text', prog: 'aviso-progress', bar: 'aviso-progress-bar', ptext: 'aviso-progress-text', status: 'aviso-status', type: 'aviso' },
        'atualizacao_emblemas': { btn: 'btn-send-emblemas', text: 'btn-emblemas-text', prog: 'emblemas-progress', bar: 'emblemas-progress-bar', ptext: 'emblemas-progress-text', status: 'emblemas-status', type: 'emblemas' },
        'votacao_grupos': { btn: 'btn-send-votacao_grupos', text: 'btn-votacao_grupos-text', prog: 'votacao_grupos-progress', bar: 'votacao_grupos-progress-bar', ptext: 'votacao_grupos-progress-text', status: 'votacao_grupos-status', type: 'votacao' }
    };

    const c = configMap[tipo];
    const btn = document.getElementById(c.btn);

    if (!validateCurrentTemplate(btn)) return;

    const btnText = document.getElementById(c.text);
    const originalText = btnText.innerText;
    const progress = document.getElementById(c.prog);
    const progressBar = document.getElementById(c.bar);
    const progressText = document.getElementById(c.ptext);
    const statusContainer = document.getElementById(c.status);

    const template = templates[tipo];
    const groups = template.groups;

    let bbcode = buildGroupBBCode(tipo, template);
    let subject = template.subject;

    if (tipo === 'aviso_avaliacao') {
        const tipoAval = document.querySelector('input[name="tipo-avaliacao"]:checked').value;
        subject = (tipoAval === 'quinzenal') ? template.subject_quinzenal : template.subject_mensal;
    }

    btn.disabled = true;
    isSending = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btnText.innerText = 'Enviando...';
    progress.classList.remove('hidden');
    statusContainer.innerHTML = '';

    let enviados = 0, erros = 0;

    for (let i = 0; i < groups.length; i++) {
        const group = groups[i];
        addStatusRow(c.status, group.id, group.name, '', group.logo);

        try {
            const formData = new FormData();
            formData.append('usergroup', group.id);
            formData.append('subject', subject);
            formData.append('message', bbcode);
            formData.append('mode', 'post');
            formData.append('post', '1');

            const response = await fetch('/privmsg', { method: 'POST', body: formData });
            if (response.ok) { enviados++; updateStatusRow(c.status, group.id, 'success'); }
            else { throw new Error(); }
        } catch (e) { erros++; updateStatusRow(c.status, group.id, 'error'); }

        progressBar.style.width = `${((i + 1) / groups.length) * 100}%`;
        progressText.innerText = `${i + 1}/${groups.length}`;

        if (i < groups.length - 1) await new Promise(r => setTimeout(r, 5000));
    }

    if (erros === 0) {
        btnText.innerText = 'Todas enviadas!';
        btn.classList.add('bg-green-600');

        // Celebrate!
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#005600', '#00c800', '#ffffff']
        });
    } else {
        btnText.innerText = `${enviados}/${groups.length} enviadas`;
        btn.classList.add('bg-yellow-600');
    }

    setTimeout(() => {
        btn.disabled = false;
        isSending = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-green-600', 'bg-yellow-600');
        btnText.innerText = originalText;
        progress.classList.add('hidden');
    }, 5000);
}

// Função unificada para enviar MPs Individuais
async function enviarMensagemPrivada(tipo) {
    if (isSending) return;
    const configMap = {
        'intimacao': { btn: 'btn-send-intimacao', text: 'btn-intimacao-text', prog: null },
        'veredito': { btn: 'btn-send-veredito', text: 'btn-veredito-text', prog: 'veredito-progress', bar: 'veredito-progress-bar', ptext: 'veredito-progress-text', status: 'veredito-status' }
    };

    const c = configMap[tipo];
    const btn = document.getElementById(c.btn);

    if (!validateCurrentTemplate(btn)) return;

    const btnText = document.getElementById(c.text);
    const originalText = btnText.innerText;

    const template = templates[tipo];
    let destinatarios = [];

    if (tipo === 'intimacao') {
        const requerido = document.getElementById('input-requerido-int').value;
        destinatarios = [{ nick: requerido, label: 'Requerido' }];
    } else {
        const req = document.getElementById('input-requerente-ver').value;
        const red = document.getElementById('input-requerido-ver').value;
        destinatarios = [{ nick: red, label: 'Requerido' }, { nick: req, label: 'Requerente' }];
    }

    btn.disabled = true;
    isSending = true;
    btn.classList.add('opacity-50', 'cursor-not-allowed');
    btnText.innerText = 'Enviando...';

    if (c.prog) {
        document.getElementById(c.prog).classList.remove('hidden');
        document.getElementById(c.status).innerHTML = '';
    }

    let enviados = 0, erros = 0;

    for (let i = 0; i < destinatarios.length; i++) {
        const dest = destinatarios[i];
        if (c.prog) addStatusRow(c.status, dest.nick, dest.nick, dest.label);

        const bbcode = (tipo === 'intimacao') ? generateIntimacaoBBCode() : generateVereditoBBCode(dest.nick);

        try {
            const formData = new FormData();
            formData.append('username[]', dest.nick);
            formData.append('subject', template.subject);
            formData.append('message', bbcode);
            formData.append('mode', 'post');
            formData.append('post', '1');

            const response = await fetch('/privmsg', { method: 'POST', body: formData });
            if (response.ok) {
                enviados++;
                if (c.prog) updateStatusRow(c.status, dest.nick, 'success');
            } else { throw new Error(); }
        } catch (e) {
            erros++;
            if (c.prog) updateStatusRow(c.status, dest.nick, 'error');
        }

        if (c.prog) {
            document.getElementById(c.bar).style.width = `${((i + 1) / destinatarios.length) * 100}%`;
            document.getElementById(c.ptext).innerText = `${i + 1}/${destinatarios.length}`;
        }

        if (i < destinatarios.length - 1) await new Promise(r => setTimeout(r, 5000));
    }

    if (erros === 0) {
        btnText.innerText = 'Sucesso!';
        btn.classList.add('bg-green-600');

        // Celebrate!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#005600', '#00c800', '#ffffff']
        });
    } else {
        btnText.innerText = 'Erro no envio';
        btn.classList.add('bg-red-600');
    }

    setTimeout(() => {
        btn.disabled = false;
        isSending = false;
        btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-green-600', 'bg-red-600');
        btnText.innerText = originalText;
        if (c.prog) document.getElementById(c.prog).classList.add('hidden');
    }, 5000);
}

// Helpers de Status Centralizados
function addStatusRow(containerId, id, title, subtitle = '', logo = '') {
    const container = document.getElementById(containerId);
    const rowId = `status-row-${id.replace(/\s+/g, '-')}`;
    const html = `
                <div id="${rowId}" class="flex items-center gap-3 bg-black/30 p-3 rounded-xl border border-white/5 transition-all">
                    ${logo ? `<img src="${logo}" alt="${title}" class="h-8 w-8 object-contain rounded">` : `
                    <div class="status-icon w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <i class="fa-solid fa-spinner fa-spin text-yellow-400"></i>
                    </div>`}
                    <div class="flex-1">
                        <p class="text-sm font-bold text-white">${title}</p>
                        ${subtitle ? `<p class="text-[10px] text-gray-500 uppercase font-bold">${subtitle}</p>` : ''}
                    </div>
                    ${logo ? `<span class="status-icon"><i class="fa-solid fa-spinner fa-spin text-yellow-400"></i></span>` : `<span class="status-text text-[10px] font-bold text-yellow-500 uppercase tracking-widest">Enviando</span>`}
                </div>
            `;
    container.insertAdjacentHTML('beforeend', html);
}

function updateStatusRow(containerId, id, status) {
    const rowId = `status-row-${id.replace(/\s+/g, '-')}`;
    const element = document.getElementById(rowId);
    if (!element) return;

    const iconDiv = element.querySelector('.status-icon');
    const statusText = element.querySelector('.status-text');

    if (status === 'success') {
        if (element.querySelector('img')) {
            element.className = 'flex items-center gap-3 p-3 rounded-xl border bg-[#005600]/20 border-[#005600]/40 text-[#00c800] transition-all';
            iconDiv.innerHTML = '<i class="fa-solid fa-check h-5 w-5"></i>';
        } else {
            iconDiv.className = 'status-icon w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center';
            iconDiv.innerHTML = '<i class="fa-solid fa-check text-green-400"></i>';
            statusText.className = 'status-text text-[10px] font-bold text-green-400 uppercase tracking-widest';
            statusText.innerText = 'Sucesso';
            element.classList.add('border-green-500/20');
        }
    } else {
        if (element.querySelector('img')) {
            element.className = 'flex items-center gap-3 p-3 rounded-xl border bg-red-500/20 border-red-500/40 text-red-400 transition-all';
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark h-5 w-5"></i>';
        } else {
            iconDiv.className = 'status-icon w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center';
            iconDiv.innerHTML = '<i class="fa-solid fa-xmark text-red-400"></i>';
            statusText.className = 'status-text text-[10px] font-bold text-red-400 uppercase tracking-widest';
            statusText.innerText = 'Erro';
            element.classList.add('border-red-500/20');
        }
    }
}

function buildGroupBBCode(tipo, template) {
    if (tipo === 'bloqueio') {
        const tb = document.querySelector('input[name="tipo-bloqueio"]:checked').value;
        return (tb === 'quinzenal') ? template.bbcode_quinzenal : template.bbcode_mensal;
    }
    if (tipo === 'coleta_horarios') {
        const prazo = formatDate(document.getElementById('input-prazo-coleta').value);
        const hora = document.getElementById('input-hora-coleta').value;
        return template.bbcode.replace(/\{\{prazo\}\}/g, prazo).replace(/\{\{hora\}\}/g, hora);
    }
    if (tipo === 'aviso_avaliacao') {
        const ta = document.querySelector('input[name="tipo-avaliacao"]:checked').value;
        const fieldId = (ta === 'quinzenal') ? 'input-avaliacao-fim' : 'input-avaliacao-mensal-fim';
        const prazo = formatDate(document.getElementById(fieldId).value);
        return (ta === 'quinzenal') ? template.bbcode_quinzenal.replace(/\{\{prazo\}\}/g, prazo) : template.bbcode_mensal.replace(/\{\{prazo\}\}/g, prazo);
    }
    if (tipo === 'atualizacao_emblemas') {
        const rawInicio = document.getElementById('input-emblemas-inicio').value;
        const rawFim = document.getElementById('input-emblemas-fim').value;
        return template.bbcode.replace(/\{\{periodo_inicio\}\}/g, formatDate(rawInicio)).replace(/\{\{periodo_fim\}\}/g, formatDate(rawFim));
    }
    return template.bbcode;
}


function resetGroupsProgress() {
    isSending = false;
    document.getElementById('votacao_grupos-progress').classList.add('hidden');
    document.getElementById('votacao_grupos-status').innerHTML = '';
    document.getElementById('votacao_grupos-progress-bar').style.width = '0%';
    document.getElementById('votacao_grupos-progress-text').innerText = '0/5';
    document.getElementById('btn-votacao_grupos-text').innerText = 'Enviar para Todas as Companhias';
    document.getElementById('btn-send-votacao_grupos').disabled = false;
    document.getElementById('btn-send-votacao_grupos').classList.remove('opacity-50', 'cursor-not-allowed');
}



window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Lógica de Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');

function toggleMobileMenu(show) {
    if (show) {
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
closeSidebarBtn.addEventListener('click', () => toggleMobileMenu(false));
sidebarOverlay.addEventListener('click', () => toggleMobileMenu(false));
