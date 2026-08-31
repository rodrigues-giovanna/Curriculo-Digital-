const dadosPadrao = {
  nome: "Giovanna Rodrigues",

  cargo:
    "Desenvolvedora Web em formação",

  cidade:
    "Juiz de Fora - MG",

  curso:
    "Desenvolvimento Web",

  objetivo:
    "Primeira oportunidade em tecnologia",

  descricao:
    "Estou dando meus primeiros passos no desenvolvimento web. Gosto de aprender na prática, resolver problemas e criar projetos que façam diferença."
};

let dadosPessoais =
  JSON.parse(
    localStorage.getItem(
      "dadosPessoais"
    )
  ) || dadosPadrao;




function salvar(
  chave,
  valor
) {

  localStorage.setItem(
    chave,
    JSON.stringify(valor)
  );

}




function atualizarDados() {

  const elementos = {

    "nome-hero":
      dadosPessoais.nome,

    "nome-rodape":
      dadosPessoais.nome,

    "descricao-hero":
      dadosPessoais.descricao,

    "descricao-sobre":
      dadosPessoais.descricao,

    "info-cidade":
      dadosPessoais.cidade,

    "info-curso":
      dadosPessoais.curso,

    "info-objetivo":
      dadosPessoais.objetivo,

    "contato-cidade":
      dadosPessoais.cidade

  };


  Object.entries(
    elementos
  ).forEach(
    ([id, valor]) => {

      const elemento =
        document.getElementById(id);

      if (elemento) {
        elemento.textContent =
          valor;
      }

    }
  );

}




const menu =
  document.getElementById(
    "menu"
  );

const botaoMenu =
  document.getElementById(
    "botao-menu"
  );


botaoMenu.addEventListener(
  "click",
  () => {

    menu.classList.toggle(
      "aberto"
    );

    const aberto =
      menu.classList.contains(
        "aberto"
      );

    botaoMenu.setAttribute(
      "aria-expanded",
      aberto
    );

    botaoMenu.textContent =
      aberto
        ? "×"
        : "☰";

  }
);


document
  .querySelectorAll(
    ".menu a"
  )
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          menu.classList.remove(
            "aberto"
          );

          botaoMenu.textContent =
            "☰";

          botaoMenu.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    }
  );




const secoes =
  document.querySelectorAll(
    "main section[id]"
  );


window.addEventListener(
  "scroll",
  () => {

    let atual =
      "inicio";


    secoes.forEach(
      (secao) => {

        if (
          window.scrollY >=
          secao.offsetTop - 180
        ) {

          atual =
            secao.id;

        }

      }
    );


    document
      .querySelectorAll(
        ".menu a"
      )
      .forEach(
        (link) => {

          link.classList.toggle(
            "ativo",
            link.getAttribute(
              "href"
            ) ===
              `#${atual}`
          );

        }
      );

  }
);




const botaoTema =
  document.getElementById(
    "botao-tema"
  );

function aplicarTema(
  tema
) {
  const temaAtual =
    tema === "claro"
      ? "claro"
      : "escuro";

  document.body.classList.toggle(
    "escuro",
    temaAtual === "escuro"
  );

  if (botaoTema) {
    botaoTema.textContent =
      temaAtual === "escuro"
        ? "☀️"
        : "🌙";

    botaoTema.setAttribute(
      "aria-label",
      temaAtual === "escuro"
        ? "Ativar tema claro"
        : "Ativar tema escuro"
    );
  }

  localStorage.setItem(
    "tema",
    temaAtual
  );
}

const temaSalvo =
  localStorage.getItem(
    "tema"
  ) || "escuro";

aplicarTema(
  temaSalvo
);

if (botaoTema) {
  botaoTema.addEventListener(
    "click",
    () => {
      const novoTema =
        document.body.classList.contains(
          "escuro"
        )
          ? "claro"
          : "escuro";

      aplicarTema(
        novoTema
      );
    }
  );
}


const cargos = [

  dadosPessoais.cargo,

  "Estudante de programação",

  "Desenvolvedora em treinamento 💻",

  "Futura profissional de tecnologia"

];


let indiceCargo = 0;

let indiceLetra = 0;

let apagando = false;


function digitar() {

  const elemento =
    document.getElementById(
      "texto-digitacao"
    );

  const texto =
    cargos[indiceCargo];


  elemento.textContent =
    texto.substring(
      0,
      indiceLetra
    );


  if (!apagando) {

    indiceLetra++;


    if (
      indiceLetra >
      texto.length
    ) {

      apagando = true;

      setTimeout(
        digitar,
        1300
      );

      return;

    }

  } else {

    indiceLetra--;


    if (
      indiceLetra < 0
    ) {

      apagando = false;

      indiceCargo =
        (indiceCargo + 1) %
        cargos.length;

      indiceLetra = 0;

    }

  }


  setTimeout(
    digitar,
    apagando
      ? 35
      : 75
  );

}




const eventosPadrao = [

  {
    periodo: "2025",
    titulo: "Início dos estudos",
    descricao:
      "Primeiros passos na programação.",
    icone: "🚀",
    cor: "#6d28d9"
  },

  {
    periodo: "2025",
    titulo: "Aprendizado de HTML",
    descricao:
      "Estrutura e semântica da web.",
    icone: "🏗️",
    cor: "#2563eb"
  },

  {
    periodo: "2025",
    titulo: "Aprendizado de CSS",
    descricao:
      "Layouts e páginas responsivas.",
    icone: "🎨",
    cor: "#0ea5e9"
  },

  {
    periodo: "2025",
    titulo: "Introdução ao JavaScript",
    descricao:
      "Lógica e interatividade.",
    icone: "⚡",
    cor: "#f59e0b"
  },

  {
    periodo: "2026",
    titulo: "Conceitos de JavaScript praticados",
    descricao:
      "variáveis com `const` e `let`.",
    icone: "💻",
    cor: "#10b981"
  },

  {
    periodo: "Futuro",
    titulo: "Primeira oportunidade",
    descricao:
      "Entrar profissionalmente na área.",
    icone: "🎯",
    cor: "#ec4899"
  }

];


let eventosUsuario =
  JSON.parse(
    localStorage.getItem(
      "eventosUsuario"
    )
  ) || [];


function carregarTimeline() {

  const area =
    document.getElementById(
      "linha-do-tempo"
    );

  area.innerHTML = "";


  const eventos = [
    ...eventosPadrao,
    ...eventosUsuario
  ];


  eventos.forEach(
    (evento, indice) => {

      const elemento =
        document.createElement(
          "article"
        );

      elemento.className =
        "evento";


      elemento.innerHTML = `

        <div
          class="evento-icone"
          style="background:${evento.cor}"
        >
          ${evento.icone}
        </div>

        <small>
          ${evento.periodo}
        </small>

        <h3>
          ${evento.titulo}
        </h3>

        <p>
          ${evento.descricao}
        </p>

        ${
          evento.usuario
            ? `
              <button
                class="excluir-evento"
                data-indice="${
                  indice -
                  eventosPadrao.length
                }"
              >
                Excluir
              </button>
            `
            : ""
        }

      `;


      area.appendChild(
        elemento
      );

    }
  );


  document
    .querySelectorAll(
      ".excluir-evento"
    )
    .forEach(
      (botao) => {

        botao.addEventListener(
          "click",
          () => {

            eventosUsuario.splice(
              Number(
                botao.dataset.indice
              ),
              1
            );

            salvar(
              "eventosUsuario",
              eventosUsuario
            );

            carregarTimeline();

          }
        );

      }
    );

}




document
  .getElementById(
    "form-trajetoria"
  )
  .addEventListener(
    "submit",
    (evento) => {

      evento.preventDefault();

      const form =
        evento.currentTarget;


      eventosUsuario.push({

        periodo:
          form.periodo.value,

        titulo:
          form.titulo.value,

        descricao:
          form.descricao.value,

        icone:
          "⭐",

        cor:
          "#8b5cf6",

        usuario:
          true

      });


      salvar(
        "eventosUsuario",
        eventosUsuario
      );


      form.reset();

      carregarTimeline();

    }
  );




const habilidades = [

  {
    nome: "HTML",
    porcentagem: 85,
    categoria: "tecnologia"
  },

  {
    nome: "CSS",
    porcentagem: 75,
    categoria: "tecnologia"
  },

  {
    nome: "JavaScript",
    porcentagem: 65,
    categoria: "tecnologia"
  },

  {
    nome: "Git",
    porcentagem: 55,
    categoria: "tecnologia"
  },

  {
    nome: "GitHub",
    porcentagem: 60,
    categoria: "tecnologia"
  },

  {
    nome: "Lógica",
    porcentagem: 70,
    categoria: "tecnologia"
  },

  {
    nome: "Comunicação",
    porcentagem: 80,
    categoria: "pessoal"
  },

  {
    nome: "Trabalho em equipe",
    porcentagem: 90,
    categoria: "pessoal"
  }

];


function carregarHabilidades(
  filtro = "todas"
) {

  const area =
    document.getElementById(
      "lista-habilidades"
    );

  area.innerHTML = "";


  habilidades
    .filter(
      (item) =>
        filtro === "todas" ||
        item.categoria === filtro
    )
    .forEach(
      (item) => {

        area.innerHTML += `

          <article class="habilidade">

            <div
              class="habilidade-topo"
            >

              <span>
                ${item.nome}
              </span>

              <span>
                ${item.porcentagem}%
              </span>

            </div>

            <div class="barra">

              <span
                data-largura="${item.porcentagem}%"
              ></span>

            </div>

            <small>
              ${item.categoria}
            </small>

          </article>

        `;

      }
    );

    document
  .getElementById("form-habilidade")
  .addEventListener("submit", (evento) => {

    evento.preventDefault();

    const form = evento.currentTarget;

    const novaHabilidade = {
      nome: form.nome.value.trim(),
      categoria: form.categoria.value,
      porcentagem: Number(form.porcentagem.value)
    };

    habilidades.push(novaHabilidade);

    localStorage.setItem(
      "habilidades",
      JSON.stringify(habilidades)
    );

    form.reset();

    carregarHabilidades();

  });


  setTimeout(
    () => {

      document
        .querySelectorAll(
          ".barra span"
        )
        .forEach(
          (barra) => {

            barra.style.width =
              barra.dataset.largura;

          }
        );

    },
    100
  );

}


document
  .querySelectorAll(
    "#filtros-habilidades button"
  )
  .forEach(
    (botao) => {

      botao.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "#filtros-habilidades button"
            )
            .forEach(
              (item) =>
                item.classList.remove(
                  "ativo"
                )
            );


          botao.classList.add(
            "ativo"
          );


          carregarHabilidades(
            botao.dataset.filtro
          );

        }
      );

    }
  );




const projetos = [

  {
    titulo:
      "Troca de Humor",

    imagem:
      "img/Troca de Humor.png",

    descricao:
      "Projeto interativo desenvolvido para mudar o humor de acordo com o clique.",

    tecnologias:
      [
        "HTML",
        "CSS",
        "JavaScript"
      ],

    link:
      "https://rodrigues-giovanna.github.io/Desafio-01/",

    github:
      "https://github.com/rodrigues-giovanna/Desafio-01",

    data:
      "Agosto de 2026",

    aprendizados:
      "Manipulação do DOM, eventos de clique e estilização dinâmica."
  },


  {
    titulo:
      "Jogo da Forca Dezembro Vermelho",

    imagem:
      "img/logo jogo da forca.png",

    descricao:
      "Jogo de conscientização sobre o Dezembro Vermelho.",

    tecnologias:
      [
        "HTML",
        "CSS",
        "JavaScript"
      ],

    link:
      "https://rodrigues-giovanna.github.io/Jogo-da-Forca/",

    github:
      "https://github.com/rodrigues-giovanna/Jogo-da-Forca",

    data:
      "Dezembro de 2025",

    aprendizados:
      "Arrays, eventos, condições, lógica e criação de uma experiência interativa."
  },


  {
    titulo:
      "Empresa fictícia",

    imagem:
      "img/logo da empresa.png",

    descricao:
      "Landing page criada para uma empresa fictícia como atividade de aula.",

    tecnologias:
      [
        "HTML",
        "CSS"
      ],

    link:
      "https://rodrigues-giovanna.github.io/Trabalho-Landing-Page/",

    github:
      "https://github.com/rodrigues-giovanna/Trabalho-Landing-Page",

    data:
      "Julho de 2025",

    aprendizados:
      "Estruturação de landing pages, CSS, organização visual e responsividade."
  }

];


function carregarProjetos(
  filtro = "todos"
) {

  const area =
    document.getElementById(
      "lista-projetos"
    );

  area.innerHTML = "";


  projetos
  .filter((projeto) => {
    if (filtro === "todos") {
      return true;
    }

    if (filtro === "HTML") {
      return projeto.tecnologias.includes("HTML");
    }

    if (filtro === "CSS") {
      return projeto.tecnologias.includes("CSS");
    }

    if (filtro === "JavaScript") {
      return projeto.tecnologias.includes("JavaScript");
    }

    if (filtro === "2026") {
      return projeto.data.includes("2026");
    }

    return false;
  })
    .forEach(
      (projeto, indice) => {

        area.innerHTML += `

          <article class="projeto-card">

            <img
              src="${projeto.imagem}"
              alt="Projeto ${projeto.titulo}"
              loading="lazy"
            >

            <div class="projeto-corpo">

              <h3>
                ${projeto.titulo}
              </h3>

              <p>
                ${projeto.descricao}
              </p>

              <div class="tags">

                ${projeto.tecnologias
                  .map(
                    (tecnologia) =>
                      `
                      <span class="tag">
                        ${tecnologia}
                      </span>
                      `
                  )
                  .join("")}

              </div>

              <div class="projeto-acoes">

                <a
                  href="${projeto.link}"
                  target="_blank"
                  rel="noopener"
                  class="botao primario"
                >
                  Ver projeto ↗
                </a>

                <button
                  class="botao detalhes"
                  data-indice="${indice}"
                >
                  Detalhes
                </button>

              </div>

            </div>

          </article>

        `;

      }
    );


  document
    .querySelectorAll(
      ".detalhes"
    )
    .forEach(
      (botao) => {

        botao.addEventListener(
          "click",
          () => {

            abrirProjeto(
              projetos[
                Number(
                  botao.dataset.indice
                )
              ]
            );

          }
        );

      }
    );

}


document
  .querySelectorAll(
    "#filtros-projetos button"
  )
  .forEach(
    (botao) => {

      botao.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "#filtros-projetos button"
            )
            .forEach(
              (item) =>
                item.classList.remove(
                  "ativo"
                )
            );


          botao.classList.add(
            "ativo"
          );


          carregarProjetos(
            botao.dataset.filtro
          );

        }
      );

    }
  );




function abrirModal(
  modal
) {

  modal.classList.add(
    "aberto"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


function fecharModal(
  modal
) {

  modal.classList.remove(
    "aberto"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


const modalProjeto =
  document.getElementById(
    "modal-projeto"
  );


function abrirProjeto(
  projeto
) {

  document.getElementById(
    "detalhes-projeto"
  ).innerHTML = `

    <span class="modal-kicker">
      PROJETO
    </span>

    <h2>
      ${projeto.titulo}
    </h2>

    <p>
      ${projeto.descricao}
    </p>

    <h3>
      O que aprendi
    </h3>

    <p>
      ${projeto.aprendizados}
    </p>

    <h3>
      Tecnologias
    </h3>

    <p>
      ${projeto.tecnologias.join(
        ", "
      )}
    </p>

    <h3>
      Data
    </h3>

    <p>
      ${projeto.data}
    </p>

    <div
      class="acoes"
      style="margin-top:20px"
    >

      <a
        href="${projeto.link}"
        target="_blank"
        rel="noopener"
        class="botao primario"
      >
        Abrir projeto ↗
      </a>

      <a
        href="${projeto.github}"
        target="_blank"
        rel="noopener"
        class="botao detalhes"
      >
        GitHub ↗
      </a>

    </div>

  `;


  abrirModal(
    modalProjeto
  );

}




document
  .querySelectorAll(
    ".fechar-modal"
  )
  .forEach(
    (botao) => {

      botao.addEventListener(
        "click",
        () => {

          fecharModal(
            botao.closest(
              ".modal"
            )
          );

        }
      );

    }
  );


document
  .querySelectorAll(
    ".modal"
  )
  .forEach(
    (modal) => {

      modal.addEventListener(
        "click",
        (evento) => {

          if (
            evento.target ===
            modal
          ) {

            fecharModal(
              modal
            );

          }

        }
      );

    }
  );


document.addEventListener(
  "keydown",
  (evento) => {

    if (
      evento.key ===
      "Escape"
    ) {

      document
        .querySelectorAll(
          ".modal.aberto"
        )
        .forEach(
          fecharModal
        );

    }

  }
);




document
  .getElementById(
    "form-contato"
  )
  .addEventListener(
    "submit",
    (evento) => {

      evento.preventDefault();


      const form =
        evento.currentTarget;


      const mensagem =
        document.getElementById(
          "mensagem-form"
        );
        
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const texto = form.mensagem.value.trim();

        if (nome.length < 3) {
          mensagem.textContent =
            "O nome deve ter pelo menos 3 caracteres.";
          return;
        }

        if (!email.includes("@") || !email.includes(".")) {
          mensagem.textContent =
            "Digite um e-mail válido.";
          return;
        }

        if (texto.length < 10) {
          mensagem.textContent =
            "A mensagem deve ter pelo menos 10 caracteres.";
          return;
        }

      if (
        !form.checkValidity()
      ) {

        mensagem.textContent =
          "Preencha todos os campos corretamente.";

        return;

      }


      mensagem.textContent =
        "Mensagem validada com sucesso! Obrigado pelo contato.";


      form.reset();


      setTimeout(
        () => {

          mensagem.textContent =
            "";

        },
        5000
      );

    }
  );




const voltarTopo =
  document.getElementById(
    "voltar-topo"
  );


window.addEventListener(
  "scroll",
  () => {

    voltarTopo.classList.toggle(
      "visivel",
      window.scrollY > 500
    );

  }
);


voltarTopo.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior:
        "smooth"

    });

  }
);




const observador =
  new IntersectionObserver(
    (entradas) => {

      entradas.forEach(
        (entrada) => {

          if (
            entrada.isIntersecting
          ) {

            entrada.target.classList.add(
              "visivel"
            );

          }

        }
      );

    },
    {
      threshold: .12
    }
  );


document
  .querySelectorAll(
    ".revelar"
  )
  .forEach(
    (elemento) => {

      observador.observe(
        elemento
      );

    }
  );




document.getElementById(
  "ano-atual"
).textContent =
  new Date()
    .getFullYear();


atualizarDados();

carregarTimeline();

carregarHabilidades();

carregarProjetos();

digitar();
