import { useState } from "react";
import "./NoticeCard.css";

function NoticeCard({ notice, onToggleFeatured, onDeleteNotice }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <article className={`notice-card ${notice.featured ? "featured" : ""}`}>
      <p>{notice.category}</p>
      <h3>{notice.title}</h3>
      <p>{notice.description}</p>

      <div className="notice-meta">
        <span>Por: {notice.author}</span>
        {" - "}
        <span>Data: {notice.date}</span>
      </div>

      {showDetails && (
        <p>
          {notice.id === 1
            ? "Participe da Secitex 2026 (Semana de Tecnologia e Extensão), no Campus Macau do IFRN. O evento reúne estudantes, pesquisadores e profissionais da área de tecnologia para compartilhar conhecimentos e experiências. Inscreva-se agora!"
            : "O campus está em manutenção temporária em algumas áreas, uma delas sendo o laboratório de informática 2. Em breve, as atividades serão retomadas normalmente."}
        </p>
      )}

      <div className="notice-actions">
        <button onClick={() => onToggleFeatured(notice.id)}>
          {notice.featured ? "Remover destaque" : "Destacar"}
        </button>

        <button
          className="details"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Fechar detalhes" : "Exibir detalhes"}
        </button>

        <button onClick={() => onDeleteNotice(notice.id)}>
          Excluir
        </button>
      </div>
    </article>
  );
}

export default NoticeCard;