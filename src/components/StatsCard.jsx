
import Card from './Card';

function StatsCard({ title, value, note, variant = '' }) {
  return (
    <Card className={`stat-card ${variant}`}>
      <span className="stat-label">{title}</span>
      <h2>{value}</h2>
      <span className="stat-note">{note}</span>
    </Card>
  );
}

export default StatsCard;
