
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const date = new Date().getFullYear();
    return (
        <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
                <p className="col-md-4 mb-0 text-body-secondary">© {date} Company, Inc</p> 
                <Link
                        href="/"
                        className="text-decoration-none text-white d-flex align-items-center gap-2"
                    >
                <Image
                    src="/images/logo.png"
                    alt="Puma Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
                </Link>
                <ul className="nav col-md-4 justify-content-end">
                     <li className="nav-item"><Link href="/" className="nav-link px-2 text-body-secondary">Home</Link></li> 
                     <li className="nav-item"><Link href="/products" className="nav-link px-2 text-body-secondary">Features</Link></li>
                     <li className="nav-item"><Link href="/contact" className="nav-link px-2 text-body-secondary">FAQs</Link></li> 
                     <li className="nav-item"><Link href="/about" className="nav-link px-2 text-body-secondary">About</Link></li> 
                </ul>
            </footer> 
        </div>
    )
}