//this component checks whether we are in SSR or not
//actaully this is a wrapper for protecting the components from hydration error of NEXTJS
"use client";

interface CilentOnlyProps {
  children: React.ReactNode;
}
const ClientOnly: React.FC<CilentOnlyProps> = ({ children }) => {

  return( 
    <>
  <div>{children}</div>
  </>
  );
};

export default ClientOnly;
