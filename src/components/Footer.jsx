function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Hamisha Noori
      </p>

      <div className="footer-links">
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;