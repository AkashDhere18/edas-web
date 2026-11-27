import Link from 'next/link';
import { BuildingIcon } from './Icons';

export default function ProjectCard({ href, image, alt, objectPosition, status, statusLabel, title, meta }) {
  const content = (
    <>
      {image ? (
        <div className="media">
          <img src={image} alt={alt} loading="lazy" style={objectPosition ? { objectPosition } : undefined} />
        </div>
      ) : (
        <div className="media" style={{ display: 'grid', placeItems: 'center', color: 'var(--brand)' }}>
          <span style={{ width: '64px' }}>
            <BuildingIcon />
          </span>
        </div>
      )}
      <div className="body">
        <span className={`tag ${status}`}>{statusLabel}</span>
        <h3>{title}</h3>
        <div className="meta">
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </>
  );

  return href ? (
    <Link className="card" href={href}>
      {content}
    </Link>
  ) : (
    <div className="card">{content}</div>
  );
}
