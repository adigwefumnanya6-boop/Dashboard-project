const footerLinks = {
  Company: ["About Us", "Careers", "Press", "Blog"],
  Courses: ["Web Development", "UI/UX Design", "Data Science", "Mobile Dev"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

function Footer() {
  return (
    <footer className="bg-[#0D1A2E] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#1A3A6E] flex items-center justify-center">
                <span className="text-[#C89030] text-xs font-bold">L</span>
              </div>
              <span className="font-bold text-xl tracking-tight">LearnHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bringing world-class education to everyone, everywhere. Learn at
              your own pace.
            </p>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#C89030] font-semibold text-sm uppercase tracking-widest mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 LearnHub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 text-sm hover:text-[#C89030] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
