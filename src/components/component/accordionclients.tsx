import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Accordionclients() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold text-lg">Apartments</AccordionTrigger>
                <AccordionContent>

                    <li className="pl-5">Contel-Hatanodai (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Hatsudai (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Higashi Ikebukuro (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Minami Ikebukuro (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Nishigotanda (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Sasazuka (Tokyo, Japan)</li>
                    <li className="pl-5">Contel-Shiba (Tokyo, Japan)</li>


                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold text-lg">Condominiums</AccordionTrigger>
                <AccordionContent>

                    <li className="pl-5">Acacia Estates</li>
                    <li className="pl-5">Admiral Baysuites</li>
                    <li className="pl-5">Discovery Primea</li>
                    <li className="pl-5">Greenbelt Hamilton</li>
                    <li className="pl-5">Horizon Homes at Shangri-La, The Fort</li>
                    <li className="pl-5">Mosaic Tower</li>
                    <li className="pl-5">One Serendra</li>
                    <li className="pl-5">One Shangri-La Place Towers, Ortigas</li>
                    <li className="pl-5">One Wilson Square</li>
                    <li className="pl-5">Renaissance Tower</li>
                    <li className="pl-5">Trump Tower</li>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold text-lg">Subdivisions</AccordionTrigger>
                <AccordionContent>

                    <li className="pl-5">Ayala Alabang Village</li>
                    <li className="pl-5">Ayala Greenfield Estates (Calamba, Laguna)</li>
                    <li className="pl-5">Ayala Heights</li>
                    <li className="pl-5">BF Homes Parañaque</li>
                    <li className="pl-5">BF Resort</li>
                    <li className="pl-5">Corinthian Gardens</li>
                    <li className="pl-5">Dasmariñas Village</li>
                    <li className="pl-5">Filinvest</li>
                    <li className="pl-5">Forbes Park</li>
                    <li className="pl-5">G.C. Berberabe Subdivision (Batangas City, Batangas)</li>

                </AccordionContent>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="font-bold text-lg">Offices</AccordionTrigger>
                    <AccordionContent>

                        <li className="pl-5">Embassy of Denmark in the Philippines</li>
                        <li className="pl-5">Foscon Ship Management</li>
                        <li className="pl-5">K Line Philippines</li>
                        <li className="pl-5">Neugen Tire Marketing</li>
                        <li className="pl-5">NOVALCO Enterprise Inc.</li>
                        <li className="pl-5">Philippine College of Criminology</li>
                        <li className="pl-5">RCBC Realty</li>
                        <li className="pl-5">Stinger Security Agency</li>
                        <li className="pl-5">TDG Ship Management</li>
                        <li className="pl-5">Uni Offices</li>

                    </AccordionContent>
                </AccordionItem>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-lg">Retail Centers</AccordionTrigger>
                <AccordionContent>
                    <li className="pl-5">Jewelmer</li>
                    <li className="pl-5">Plains & Prints</li>
                    <li className="pl-5">Regine Tolentino Atelier</li>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="font-bold text-lg">Hotels and Resorts</AccordionTrigger>
                <AccordionContent>
                    <li className="pl-5">Batis Aramin (Lucban, Quezon)</li>
                    <li className="pl-5">Blue Coral Beach Resort (San Juan, Batangas)</li>
                    <li className="pl-5">Demeter Escapade (Lipa, Batangas)</li>
                    <li className="pl-5">Marand Hotel & Resort (La Union, Pangasinan)</li>
                    <li className="pl-5">Patio by Balai Norte (La Union, Pangasinan)</li>
                    <li className="pl-5">Punta de Fabian Resort (Baras, Rizal)</li>
                    <li className="pl-5">Saglit Private Villas</li>
                    <li className="pl-5">Tagaytay Haven Hotel (Mendez, Cavite)</li>
                    <li className="pl-5">Victoria Mansions</li>
                    <li className="pl-5">Villa Caceres Hotel (Naga City, Camarines Sur)</li>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger className="font-bold text-lg">Special-Purpose Facilities</AccordionTrigger>
                <AccordionContent>
                    <li className="pl-5">2Go</li>
                    <li className="pl-5">A.V.P. Catering Services (Legazpi City, Albay)</li>
                    <li className="pl-5">Grace Nail (Tokyo, Japan)</li>
                    <li className="pl-5">Hizon’s Cakes & Pastries</li>
                    <li className="pl-5">Josefa Slipways</li>
                    <li className="pl-5">KathNails</li>
                    <li className="pl-5">KICC (San Fernando City, Pampanga)</li>
                    <li className="pl-5">KidZania Manila</li>
                    <li className="pl-5">NICC Doctors Hospital (Naga City, Camarines Sur)</li>
                    <li className="pl-5">Quiapo Church</li>
                    <li className="pl-5">Room 526 International Luxury Lounge</li>
                    <li className="pl-5">Tetsu Japanese Restaurant</li>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}