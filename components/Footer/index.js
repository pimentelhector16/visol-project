export default function index() {
  return (
    <footer className="footer">
      <p>
        Copyright &copy;
        {new Date().getFullYear()}. Visol - All rights reserved
      </p>
      <img src="/visol.png" alt="Logo" className="logo" />
    </footer>
  );
}
