import { ArrowIcon } from './Icons';

// Office addresses; offices with a "mapUrl" get an "Open in Maps" link
export default function OfficeList({ offices, style }) {
  return (
    <div className="offices" style={style}>
      {offices.map((o) => (
        <div className="office" key={o.city}>
          <h3>{o.city}</h3>
          <address>{o.address}</address>
          {o.mapUrl && (
            <a className="more" href={o.mapUrl} target="_blank" rel="noopener">
              Open in Maps <ArrowIcon />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
