import { mySocials } from "../constants";

const Footer = () => {
  // Filter out LinkedIn and Instagram
  const filteredSocials = mySocials.filter(
    (social) => social.name !== "LinkedIn" && social.name !== "Instagram"
  );

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Divider */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Links */}
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Socials */}
      <div className="flex gap-3">
        {filteredSocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noopener noreferrer">
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Alex's Weboplossingen. All rights reserved.</p>
    </section>
  );
};

export default Footer;
