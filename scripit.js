/**
 * RASTRO VERDE - Simulador de Rastreabilidade do Campo à Mesa
 * 
 * Funcionalidades:
 * - Busca de produtos por código de lote (case-insensitive)
 * - Construção dinâmica de timeline vertical com CSS
 * - Dados simulados com foco em energia renovável, leis trabalhistas e ambientais
 * - Interface responsiva com animações
 * - Tratamento de erros e feedback visual
 * 
 * @version 1.0.0
 */

// ===============================================
// BASE DE DADOS SIMULADA - PRODUTOS SUSTENTÁVEIS
// ===============================================

const database = {
    "CAFE-BR-001": {
        nomeProduto: "Café Orgânico Monte Verde",
        lote: "CAFE-BR-001",
        selos: ["🌱 Agricultura Regenerativa", "☀️ Energia Solar 100%", "🤝 Certificação Fair Trade"],
        timeline: [
            {
                fase: "Colheita Sustentável",
                titulo: "Fazenda Esperança · Sul de Minas",
                descricao: "Colheita seletiva de grãos maduros com manejo agroflorestal. Trabalhadores recebem salário digno + moradia e programa de saúde. Energia renovável (biomassa e solar) em todas as operações.",
                tags: ["☀️ Energia limpa", "👥 Lei trabalhista exemplar", "🐞 Sem defensivos tóxicos"]
            },
            {
                fase: "Processamento & Secagem",
                titulo: "Usina Verde Certificada",
                descricao: "Secagem natural em terreiros elevados com reuso de água e placas fotovoltaicas. Resíduos de café viram adubo orgânico. Emissões reduzidas em 78% comparado a métodos convencionais.",
                tags: ["♻️ Economia circular", "🔋 Energia solar", "💧 Tratamento de efluentes"]
            },
            {
                fase: "Torrefação Justa",
                titulo: "Torrefação Solar · Parque Industrial Limpo",
                descricao: "Torra artesanal com controle de poluentes, utilizando 100% eletricidade renovável. Cooperativa local garante transparência e respeito às normas da OIT.",
                tags: ["⚡ Energia eólica + solar", "🏭 Certificação Carbono Neutro", "🤝 Salário justo"]
            },
            {
                fase: "Logística Reversa",
                titulo: "Transporte Verde até o Centro de Distribuição",
                descricao: "Frota elétrica e roteirização sustentável. Embalagens biodegradáveis de amido de milho. Rastreio em tempo real de pegada de carbono compensada.",
                tags: ["🚚 Logística verde", "📦 Embalagem compostável", "🌳 Compensação de carbono"]
            },
            {
                fase: "Na sua Mesa",
                titulo: "Você apoia a cadeia sustentável",
                descricao: "O produto chega com notas de rastreabilidade. Cada xícara ajuda a preservar nascentes e gerar renda para comunidades rurais. Código QR dinâmico com dados do lote.",
                tags: ["🏆 Consumo consciente", "🔄 Economia local", "🌟 Selo Rastro Verde"]
            }
        ]
    },
    
    "LARANJA-SUL-03": {
        nomeProduto: "Laranja Vale Agroflorestal",
        lote: "LARANJA-SUL-03",
        selos: ["💧 Irrigação Solar", "🐝 Polinizadores Protegidos", "✅ Certificação Ambiental"],
        timeline: [
            {
                fase: "Pomar Biodiverso",
                titulo: "Sítio Natura · Integração lavoura-floresta",
                descricao: "Pomar com árvores nativas intercaladas, uso exclusivo de energia solar em bombas e sistemas de irrigação por gotejamento. Respeito às leis trabalhistas rurais e previdência.",
                tags: ["☀️ Bombeamento solar", "🌳 Corredor ecológico", "👨‍🌾 Trabalho seguro"]
            },
            {
                fase: "Colheita e Seleção",
                titulo: "Colheita manual + empacotamento verde",
                descricao: "Equipes treinadas em boas práticas, sem trabalho infantil. Utilização de energia fotovoltaica na packing house. Resíduos orgânicos viram biofertilizante.",
                tags: ["🔋 Energia renovável", "📜 Compliance trabalhista", "♻️ Aproveitamento total"]
            },
            {
                fase: "Transporte Carbono Neutro",
                titulo: "Rotas de distribuição sustentáveis",
                descricao: "Caminhões movidos a biodiesel e biometano. Embalagens fabricadas com PET reciclado pós-consumo. Rastreabilidade de emissões.",
                tags: ["🍃 Logística de baixo carbono", "📦 Embalagem ecológica", "🌱 Parceria climática"]
            },
            {
                fase: "Feira & Consumidor Final",
                titulo: "Do Campo à sua mesa com orgulho ético",
                descricao: "Cada lote carrega informação de procedência. A produção incentiva a agricultura familiar e preserva mananciais. Energia limpa em todas as etapas pós-colheita.",
                tags: ["🏡 Agricultura familiar", "💧 Proteção hídrica", "⚖️ Justiça social"]
            }
        ]
    },
    
    "HORT-ORG-22": {
        nomeProduto: "Mix de Hortaliças Orgânicas",
        lote: "HORT-ORG-22",
        selos: ["🧑‍🌾 Agroecologia", "💡 Eficiência energética", "🔄 Cadeia curta"],
        timeline: [
            {
                fase: "Estufas Solares",
                titulo: "BioFazenda Renovável",
                descricao: "Estufas com tecnologia de captação de energia solar ativa, aquecimento geotérmico leve. Plantio direto na palha, controle biológico de pragas, respeito às leis ambientais rigorosas.",
                tags: ["☀️ Geração distribuída", "🐞 Controle biológico", "📜 ISO 14001"]
            },
            {
                fase: "Irrigação Inteligente",
                titulo: "Sistema de reuso + energia limpa",
                descricao: "Painéis solares para bombas, água de chuva captada. Trabalhadores registrados, cesta básica e treinamento contínuo.",
                tags: ["💧 Uso racional da água", "⚡ 100% solar", "🤝 Respeito ao colaborador"]
            },
            {
                fase: "Distribuição Local",
                titulo: "Circuito Curto de Comercialização",
                descricao: "Veículo elétrico compartilhado para entregas urbanas. Embalagens retornáveis e isenção de plásticos. Monitoramento de pegada hídrica positiva.",
                tags: ["🚛 Logística limpa", "♻️ Retornável", "🏙️ Apoio à economia local"]
            },
            {
                fase: "Mesa Consciente",
                titulo: "Você conectado à natureza",
                descricao: "Rastreabilidade do lote garante transparência. Cada refeição promove redução de CO₂ e impulsiona produtores que adotam energia renovável e justiça social.",
                tags: ["🌟 Selo Rastro Verde", "🥗 Alimentação saudável", "🌎 Ativismo ambiental"]
            }
        ]
    },
    
    "MEL-FLOR-77": {
        nomeProduto: "Mel Silvestre Biodinâmico",
        lote: "MEL-FLOR-77",
        selos: ["🐝 Apicultura sustentável", "🔆 Energia solar no meliponário", "🌳 Reserva legal"],
        timeline: [
            {
                fase: "Apiário Conservacionista",
                titulo: "Reserva Flor da Mata",
                descricao: "Caixas racionais com energia solar para monitoramento remoto. Respeito aos ciclos das abelhas nativas, recuperação de mata ciliar. Geração de renda para famílias da reserva.",
                tags: ["☀️ Automação verde", "🌺 Polinização nativa", "👪 Impacto social positivo"]
            },
            {
                fase: "Extraído com Ética",
                titulo: "Beneficiamento ecologicamente correto",
                descricao: "Processo a baixa temperatura alimentado por energia fotovoltaica. Sem superaquecimento, mantendo propriedades do mel. Cooperativa segue todas as normas trabalhistas.",
                tags: ["🔋 Energia solar pura", "🍯 Produto vivo", "📋 Conformidade legal"]
            },
            {
                fase: "Embalagem e Rotulagem Verde",
                titulo: "Vidro reciclável e rótulo de papel semente",
                descricao: "Embalagens de vidro retornável e rótulo com sementes de flores. Transporte compartilhado com logística reversa.",
                tags: ["♻️ Embalagem plantar", "🚛 Rota limpa", "🧾 Transparência total"]
            },
            {
                fase: "Doçura no seu lar",
                titulo: "Valorização do mel agroecológico",
                descricao: "Todo o processo desde o apiário até a mesa mantém compromisso com energias renováveis, boas práticas trabalhistas e conservação da biodiversidade.",
                tags: ["✨ Qualidade Premium", "🌱 Pegada positiva", "🏅 Rastreável"]
            }
        ]
    }
};

// ===============================================
// FUNÇÕES AUXILIARES
// ===============================================

/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} str - String a ser escapada
 * @returns {string} String segura
 */
function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Retorna ícone apropriado baseado na fase do produto
 * @param {string} fase - Nome da fase (colheita, transporte, etc)
 * @returns {string} Classe do ícone Font Awesome
 */
function getIconForPhase(fase) {
    const lowerFase = fase.toLowerCase();
    
    if (lowerFase.includes('colheita') || lowerFase.includes('pomar') || lowerFase.includes('apiário')) {
        return 'fa-tractor';
    }
    if (lowerFase.includes('processamento') || lowerFase.includes('torrefação') || lowerFase.includes('beneficiamento') || lowerFase.includes('seleção')) {
        return 'fa-industry';
    }
    if (lowerFase.includes('transport') || lowerFase.includes('logística') || lowerFase.includes('distribuição')) {
        return 'fa-truck';
    }
    if (lowerFase.includes('mesa') || lowerFase.includes('consumidor') || lowerFase.includes('feira') || lowerFase.includes('doçura')) {
        return 'fa-utensils';
    }
    if (lowerFase.includes('estufa') || lowerFase.includes('irrigação') || lowerFase.includes('pomar')) {
        return 'fa-sprinkler';
    }
    if (lowerFase.includes('embalagem') || lowerFase.includes('rotulagem')) {
        return 'fa-box-open';
    }
    if (lowerFase.includes('extraído')) {
        return 'fa-droplet';
    }
    
    return 'fa-map-marker-alt';
}

/**
 * Constrói a timeline visual a partir dos dados do produto
 * @param {object} product - Objeto do produto contendo timeline e metadados
 * @returns {string} HTML da timeline completa
 */
function buildTimelineHTML(product) {
    if (!product || !product.timeline || !Array.isArray(product.timeline)) {
        return '';
    }
    
    let timelineHTML = `<div class="timeline">`;
    
    product.timeline.forEach((step, index) => {
        // Sanitiza os dados
        const faseSanitized = escapeHtml(step.fase);
        const tituloSanitized = escapeHtml(step.titulo);
        const descricaoSanitized = escapeHtml(step.descricao);
        
        // Constrói as tags de sustentabilidade
        const tagsHtml = step.tags.map(tag => {
            const tagSanitized = escapeHtml(tag);
            return `<span class="tag"><i class="fas fa-check-circle"></i> ${tagSanitized}</span>`;
        }).join('');
        
        // Delay incremental para animação
        const animationDelay = index * 0.08;
        
        timelineHTML += `
            <div class="timeline-item animate-in" style="animation-delay: ${animationDelay}s;">
                <div class="timeline-icon">
                    <i class="fas ${getIconForPhase(step.fase)}"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-step">
                        <span class="badge">${faseSanitized}</span>
                        <i class="fas fa-seedling"></i> ciclo rastreado
                    </div>
                    <h3>${tituloSanitized}</h3>
                    <p>${descricaoSanitized}</p>
                    <div class="sustentabilidade-tag">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
    });
    
    timelineHTML += `</div>`;
    
    // Adiciona selos extras do produto
    if (product.selos && Array.isArray(product.selos)) {
        const selosBonus = product.selos.map(selo => {
            const seloSanitized = escapeHtml(selo);
            return `<span class="tag" style="background:#dfedd4;"><i class="fas fa-award"></i> ${seloSanitized}</span>`;
        }).join('');
        
        timelineHTML += `<div style="margin-top: 1.5rem; display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px;">${selosBonus}</div>`;
    }
    
    return timelineHTML;
}

/**
 * Renderiza mensagem de erro quando o lote não é encontrado
 * @param {string} codigoBusca - Código que foi pesquisado
 * @returns {string} HTML da mensagem de erro
 */
function renderNotFoundMessage(codigoBusca) {
    const codigoSanitized = escapeHtml(codigoBusca);
    return `
        <div class="empty-message animate-in">
            <i class="fas fa-question-circle" style="font-size: 2.8rem; color: #93a77d;"></i>
            <p style="margin-top: 18px; font-weight: 700;">🔎 Nenhum lote encontrado para "${codigoSanitized}"</p>
            <p style="font-size: 0.9rem; margin-top: 8px;">
                Utilize os códigos sugeridos abaixo do campo de busca:<br>
                <strong>CAFE-BR-001</strong> · <strong>LARANJA-SUL-03</strong> · <strong>HORT-ORG-22</strong> · <strong>MEL-FLOR-77</strong>
            </p>
            <p style="font-size: 0.8rem; margin-top: 12px;">
                <i class="fas fa-leaf"></i> Todos os nossos produtos seguem padrões rigorosos de sustentabilidade
            </p>
        </div>
    `;
}

/**
 * Renderiza mensagem inicial (antes da primeira busca)
 * @returns {string} HTML da mensagem inicial
 */
function renderInitialMessage() {
    return `
        <div class="empty-message animate-in">
            <i class="fas fa-search-tree" style="font-size: 2.8rem; opacity: 0.8;"></i>
            <p style="margin-top: 16px; font-weight: 600;">🔍 Insira um código de lote e descubra a rota verde do alimento.</p>
            <p style="margin-top: 8px; font-size: 0.9rem;">
                🌱 Produção com energia renovável · 🌿 Respeito ambiental · 🤝 Trabalho digno
            </p>
            <p style="margin-top: 16px; font-size: 0.8rem; opacity: 0.8;">
                <i class="fas fa-qrcode"></i> Simule um código QR e acompanhe a jornada do campo à mesa
            </p>
        </div>
    `;
}

/**
 * Renderiza mensagem quando o campo está vazio
 * @returns {string} HTML de aviso
 */
function renderEmptyInputMessage() {
    return `
        <div class="empty-message animate-in">
            <i class="fas fa-exclamation-triangle" style="font-size: 2.5rem; color: #d4a11e;"></i>
            <p style="margin-top: 16px; font-weight: 600;">📌 Por favor, digite um código de lote</p>
            <p style="margin-top: 8px;">Experimente os códigos sugeridos acima para ver a rastreabilidade em ação</p>
        </div>
    `;
}

/**
 * Função principal que processa a busca e atualiza a interface
 * Manipulação avançada de strings: upperCase, trim, sanitização
 */
function handleRastrear() {
    // Obtém o valor do input e aplica manipulação avançada de strings
    let codigoBusca = loteInput.value.trim();
    
    // Caso vazio: mostra mensagem específica
    if (codigoBusca === "") {
        dynamicTitle.innerHTML = `<i class="fas fa-history"></i> Jornada da transparência`;
        timelineContainer.innerHTML = renderEmptyInputMessage();
        return;
    }
    
    // Normalização do código: uppercase + remove espaços extras
    const codigoNormalizado = codigoBusca.toUpperCase();
    
    // Busca no banco de dados (case-insensitive já garantido pelo toUpperCase)
    const product = database[codigoNormalizado];
    
    if (product) {
        // Produto encontrado - atualiza título com informações do produto
        const nomeProdutoSanitized = escapeHtml(product.nomeProduto);
        const loteSanitized = escapeHtml(product.lote);
        dynamicTitle.innerHTML = `<i class="fas fa-leaf"></i> Jornada sustentável · ${nomeProdutoSanitized} <span style="font-size:0.8rem; font-weight:400;">(lote ${loteSanitized})</span>`;
        
        // Constrói a timeline dinamicamente
        const timelineHTML = buildTimelineHTML(product);
        timelineContainer.innerHTML = timelineHTML;
        
        // Scroll suave até a timeline (experiência do usuário)
        document.getElementById('timelineArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Produto não encontrado - exibe mensagem amigável
        dynamicTitle.innerHTML = `<i class="fas fa-history"></i> Jornada da transparência · lote não localizado`;
        timelineContainer.innerHTML = renderNotFoundMessage(codigoBusca);
    }
}

/**
 * Preenche o campo de busca com um código de exemplo e executa a busca
 * @param {string} code - Código do lote a ser preenchido
 */
function preencherExemplo(code) {
    loteInput.value = code;
    handleRastrear();
}

// ===============================================
// INICIALIZAÇÃO E EVENT LISTENERS
// ===============================================

// Elementos DOM
const loteInput = document.getElementById('loteInput');
const btnRastrear = document.getElementById('btnRastrear');
const timelineContainer = document.getElementById('timelineContainer');
const dynamicTitle = document.getElementById('dynamicTitle');
const timelineArea = document.getElementById('timelineArea'); // usado para scroll

// Validação dos elementos essenciais
if (!loteInput || !btnRastrear || !timelineContainer || !dynamicTitle) {
    console.error('[Rastro Verde] Erro: Elementos DOM não encontrados. Verifique os IDs no HTML.');
}

// Evento de clique no botão Rastrear
if (btnRastrear) {
    btnRastrear.addEventListener('click', handleRastrear);
}

// Evento de tecla Enter no campo de input
if (loteInput) {
    loteInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleRastrear();
        }
    });
}

// Configuração dos códigos de exemplo (spans clicáveis)
document.querySelectorAll('.exemplo-codigos span').forEach(span => {
    const code = span.getAttribute('data-code');
    if (code) {
        span.addEventListener('click', () => {
            preencherExemplo(code);
        });
        
        // Adiciona estilo de cursor pointer e dica visual
        span.style.cursor = 'pointer';
        span.title = `Clique para testar o lote ${code}`;
    }
});

// Renderiza a mensagem inicial ao carregar a página
if (timelineContainer) {
    timelineContainer.innerHTML = renderInitialMessage();
}

// Pequeno log de inicialização (apenas para debug amigável)
console.log('🌿 Rastro Verde iniciado! Use os códigos de exemplo para testar a rastreabilidade sustentável.');