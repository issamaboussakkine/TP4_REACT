import { Link } from 'react-router-dom';

function ListeBlog({ publications }) {
  return (
    <ul>
      {publications.map((pub) => (
        <li key={pub.id}>
          <Link to={`/publication/${pub.id}`}>{pub.titre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ListeBlog;