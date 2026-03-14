import { useParams, Link } from 'react-router-dom';

function DetailPublication({ publications }) {
  const { id } = useParams();
  const publication = publications.find((p) => p.id.toString() === id);

  if (!publication) return <p>Article non trouvé.</p>;

  return (
    <div>
      <h1>{publication.titre}</h1>
      <p>{publication.contenu}</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default DetailPublication;