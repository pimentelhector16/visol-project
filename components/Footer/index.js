export default function index() {
  return (
    <footer className="footer bg-blue-900">
      <p>
        Copyright &copy;
        {new Date().getFullYear()}. Visol - All rights reserved
      </p>
      <img src="/visol.png" alt="Logo" className="logo" />
    </footer>
  );
}
