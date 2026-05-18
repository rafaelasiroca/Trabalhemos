/**
 * API JSON Server (opcional). Sem servidor, usa dados estáticos.
 */
const API_BASE = "http://localhost:3000";

const TRABALHADORES_FALLBACK = [
  {
    id: "1",
    nome: "João Silva",
    cpf_cnpj: "12345678900",
    descricao: "Pedreiro com 10 anos de experiência em reformas e acabamentos.",
    curriculo: "",
    contato: "11999999999",
  },
  {
    id: "2",
    nome: "Maria Santos",
    cpf_cnpj: "98765432100",
    descricao: "Diarista e organização residencial — agende com flexibilidade.",
    curriculo: "",
    contato: "21988887777",
  },
  {
    id: "3",
    nome: "Ana Costa",
    cpf_cnpj: "11222333000144",
    descricao: "Manicure e nail designer — atendimento em domicílio na região.",
    curriculo: "",
    contato: "85977776666",
  },
];

function getLocalTrabalhadores() {
  try {
    const raw = localStorage.getItem("trabalhemos_trabalhadores");
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalTrabalhador(t) {
  const list = getLocalTrabalhadores();
  list.push(t);
  localStorage.setItem("trabalhemos_trabalhadores", JSON.stringify(list));
}

function onlyDigits(s) {
  return String(s).replace(/\D/g, "");
}

function mergeTrabalhadoresLists(remote) {
  const local = getLocalTrabalhadores();
  const map = new Map();
  [...TRABALHADORES_FALLBACK, ...remote, ...local].forEach((t) => {
    map.set(String(t.id), t);
  });
  return [...map.values()];
}

async function fetchTrabalhadores() {
  let remote = [];
  try {
    const res = await fetch(`${API_BASE}/trabalhadores`);
    if (res.ok) remote = await res.json();
  } catch {
    remote = [];
  }
  return mergeTrabalhadoresLists(Array.isArray(remote) ? remote : []);
}

async function fetchTrabalhadorById(id) {
  if (!id) return null;
  try {
    const res = await fetch(`${API_BASE}/trabalhadores/${encodeURIComponent(id)}`);
    if (res.ok) return await res.json();
  } catch {
    /* API fora */
  }
  const merged = mergeTrabalhadoresLists([]);
  return merged.find((t) => String(t.id) === String(id)) || null;
}

function formatPhoneBR(num) {
  const d = String(num).replace(/\D/g, "");
  if (d.length === 11) {
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }
  return num;
}

function initProfissionaisList() {
  const root = document.getElementById("lista-trabalhadores");
  if (!root) return;

  root.innerHTML =
    '<p class="text-muted text-center py-5">Carregando profissionais…</p>';

  fetchTrabalhadores().then((lista) => {
    if (!lista.length) {
      root.innerHTML =
        '<div class="tm-empty">Nenhum profissional cadastrado ainda.</div>';
      return;
    }

    root.innerHTML = "";
    lista.forEach((t) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";
      col.innerHTML = `
        <article class="card tm-card h-100">
          <div class="card-body d-flex flex-column">
            <span class="tm-chip mb-2">Perfil público</span>
            <h3 class="card-title h5">${escapeHtml(t.nome)}</h3>
            <p class="card-text text-muted small flex-grow-1">${escapeHtml(truncate(t.descricao, 140))}</p>
            <a href="perfil.html?id=${encodeURIComponent(t.id)}" class="btn btn-success rounded-pill mt-2">Ver perfil</a>
          </div>
        </article>`;
      root.appendChild(col);
    });
  });
}

function truncate(s, n) {
  if (!s || s.length <= n) return s || "";
  return s.slice(0, n).trim() + "…";
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

function initPerfil() {
  const root = document.getElementById("perfil-conteudo");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    root.innerHTML = `
      <div class="tm-empty">
        <p class="mb-3">Nenhum perfil selecionado.</p>
        <a href="profissionais.html" class="btn btn-success rounded-pill">Ver profissionais</a>
      </div>`;
    return;
  }

  root.innerHTML =
    '<p class="text-muted text-center py-5">Carregando perfil…</p>';

  fetchTrabalhadorById(id).then((t) => {
    if (!t) {
      root.innerHTML = `
        <div class="tm-empty">
          <p class="mb-3">Perfil não encontrado.</p>
          <a href="profissionais.html" class="btn btn-primary rounded-pill">Ver profissionais</a>
        </div>`;
      return;
    }

    document.title = `${t.nome} — Trabalhemos`;

    root.innerHTML = `
      <div class="row g-4">
        <div class="col-lg-8">
          <div class="card tm-card">
            <div class="card-body p-4">
              <span class="tm-chip mb-3">Trabalhador</span>
              <h1 class="h3 tm-section-title">${escapeHtml(t.nome)}</h1>
              <p class="lead text-muted mt-3">${escapeHtml(t.descricao)}</p>
              ${
                t.curriculo
                  ? `<p class="mt-3"><a href="${escapeHtml(t.curriculo)}" class="btn btn-outline-primary btn-sm rounded-pill" target="_blank" rel="noopener">Currículo / portfólio</a></p>`
                  : '<p class="text-muted small mt-3">Currículo não informado.</p>'
              }
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card tm-card border-success border-2">
            <div class="card-body p-4">
              <h2 class="h6 text-uppercase text-muted mb-3">Contato</h2>
              <p class="mb-0 fs-5 fw-semibold">${escapeHtml(formatPhoneBR(t.contato))}</p>
              <p class="small text-muted mt-2">Entre em contato diretamente com o profissional.</p>
              <a href="tel:${String(t.contato).replace(/\D/g, "")}" class="btn btn-success w-100 rounded-pill mt-3">Ligar agora</a>
            </div>
          </div>
        </div>
      </div>`;
  });
}

function showCadastroFeedback(type, message) {
  const el = document.getElementById("cadastro-feedback");
  if (!el) return;
  el.className = `alert alert-${type === "success" ? "success" : "danger"}`;
  el.textContent = message;
  el.classList.remove("d-none");
}

async function buscarCep(cep) {
  const d = onlyDigits(cep);
  if (d.length !== 8) return null;
  const res = await fetch(`https://viacep.com.br/ws/${d}/json/`);
  const data = await res.json();
  if (data.erro) return null;
  return data;
}

function initCepField() {
  const cep = document.getElementById("cep");
  if (!cep) return;

  const fill = (data) => {
    document.getElementById("logradouro").value = data.logradouro || "";
    document.getElementById("bairro").value = data.bairro || "";
    document.getElementById("cidade").value = data.localidade || "";
    document.getElementById("uf").value = data.uf || "";
  };

  const clear = () => {
    ["logradouro", "bairro", "cidade", "uf"].forEach((id) => {
      const inp = document.getElementById(id);
      if (inp) inp.value = "";
    });
  };

  cep.addEventListener("blur", async () => {
    const d = onlyDigits(cep.value);
    if (d.length !== 8) {
      clear();
      return;
    }
    try {
      const data = await buscarCep(d);
      if (data) fill(data);
      else clear();
    } catch {
      clear();
    }
  });
}

function docValido(doc) {
  const n = onlyDigits(doc);
  return n.length === 11 || n.length === 14;
}

async function initCadastro() {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  initCepField();

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const nome = String(fd.get("nome") || "").trim();
    const cpf_cnpj = String(fd.get("cpf_cnpj") || "").trim();
    const descricao = String(fd.get("descricao") || "").trim();
    const contato = String(fd.get("contato") || "").trim();
    const curriculo = String(fd.get("curriculo") || "").trim();

    const feedback = document.getElementById("cadastro-feedback");
    if (feedback) feedback.classList.add("d-none");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!docValido(cpf_cnpj)) {
      showCadastroFeedback("danger", "Informe um CPF (11 dígitos) ou CNPJ (14 dígitos) válido.");
      return;
    }

    const docNorm = onlyDigits(cpf_cnpj);
    const existentes = await fetchTrabalhadores();
    const duplicado = existentes.some((t) => onlyDigits(t.cpf_cnpj) === docNorm);
    if (duplicado) {
      showCadastroFeedback(
        "danger",
        "Este CPF/CNPJ já está cadastrado. Use outro documento ou edite seu perfil na API."
      );
      return;
    }

    const payload = {
      nome,
      cpf_cnpj: docNorm,
      descricao,
      contato: onlyDigits(contato) || contato,
      curriculo,
    };

    try {
      const res = await fetch(`${API_BASE}/trabalhadores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        const created = await res.json();
        showCadastroFeedback(
          "success",
          "Cadastro realizado com sucesso! Você já pode aparecer na lista de profissionais."
        );
        form.reset();
        ["logradouro", "bairro", "cidade", "uf"].forEach((id) => {
          const inp = document.getElementById(id);
          if (inp) inp.value = "";
        });
        if (created && created.id) {
          setTimeout(() => {
            window.location.href = `perfil.html?id=${encodeURIComponent(created.id)}`;
          }, 1200);
        }
        return;
      }
    } catch {
      /* API fora — grava local */
    }

    const id = String(Date.now());
    saveLocalTrabalhador({ ...payload, id });
    showCadastroFeedback(
      "success",
      "Cadastro salvo neste navegador (API indisponível). Inicie o JSON Server para sincronizar com o servidor."
    );
    form.reset();
    ["logradouro", "bairro", "cidade", "uf"].forEach((id) => {
      const inp = document.getElementById(id);
      if (inp) inp.value = "";
    });
    setTimeout(() => {
      window.location.href = `perfil.html?id=${encodeURIComponent(id)}`;
    }, 1200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initProfissionaisList();
  initPerfil();
  initCadastro();
});
