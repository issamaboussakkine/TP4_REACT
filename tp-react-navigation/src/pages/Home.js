import ListeBlog from '../composants/ListeBlog';

function Home({ publications }) {
  return (
    <div>
      <h2>Publications récentes</h2>
      <ListeBlog publications={publications} />
    </div>
  );
}

export default Home;