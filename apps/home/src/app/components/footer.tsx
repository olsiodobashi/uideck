const Footer = () => {
   return (
      <footer className="text-center text-white mt-[10rem]">
         <strong>
            Built with React, shared with love{' '}
            <span role="img" aria-label="Heart emoji">
               ❤️
            </span>
         </strong>
         <br />
         <br />
         <a
            className="text-[#8195DE]"
            href="https://github.com/olsiodobashi/uideck"
         >
            Github
         </a>
         &nbsp; &bull; &nbsp;
         <a
            className="text-[#8195DE]"
            href="https://bsky.app/profile/olsiodobashi.bsky.social"
         >
            Bluesky
         </a>
      </footer>
   );
};
export default Footer;
