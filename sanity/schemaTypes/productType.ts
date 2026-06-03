import { defineArrayMember, defineField, defineType } from "sanity";
import { TrolleyIcon, } from "@sanity/icons";

export const productType = defineType({
    name: "product",
    title: 'Products',
    type: 'document',
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
            description: "Product title for SEO (max 70 characters)"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),


        defineField({
            name: "origin",
            title: "Origin Link",
            type: "url",
            validation: (Rule) => Rule.required(),
            description: "Lien source du produit"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            validation: (Rule) => Rule.max(160),
            description: "Meta description for SEO (max 160 characters)"
        }),



        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{
                type: "image",
                options: {
                    hotspot: true
                },
                fields: [
                    {
                        name: "alt",
                        type: "string",
                        title: "Alternative text",
                        description: "Important for SEO and accessibility",
                        validation: Rule => Rule.required()
                    }
                ]
            }],
        }),

        defineField({
            name: "marque",
            title: "Marque",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Almo Nature", value: "almo_nature" },
                    { title: "Arden Grange", value: "arden_grange " },
                    { title: "Carnilove", value: "carnilove" },
                    { title: "JR Pet Products", value: "jr_pet_products" },
                    { title: "Lily's Kitchen", value: "lily_kitchen" },
                    { title: "Nature's Protection", value: "nature_protection" },
                    { title: "Primum", value: "primum" },
                    { title: "Wildes Land", value: "wildes_land" },

                ],
               
            },
        }),




        defineField({
            name: "age",
            title: "Age",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Adulte", value: "adulte" },
                    { title: "Chiot", value: "chiot" },
                    { title: "Senior", value: "senior" },
                    { title: "Tout type de poil", value: "tout_type_de_poil" },

                ],
               
            },
        }),
        defineField({
            name: "pays",
            title: "Pays",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "France", value: "france" },
                    { title: "Royaume uni", value: "royaume_uni" },
                    { title: "Union européenne", value: "union_europeene" },
                    { title: "Allemagne", value: "allemagne" },
                ],
               
            },
        }),

        defineField({
            name: "proteines",
            title: "Source de proteine",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Insectes", value: "insectes" },
                    { title: "Poisson", value: "poisson" },
                    { title: "Viande", value: "viande" },
                ],
               
            },
        }),
        defineField({
            name: "regimes",
            title: "Régimes Specifique",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Light", value: "light" },
                    { title: "Monoprotéiques", value: "mono_proteiques" },
                    { title: "Sans céréales", value: "sans_cereales" },
                    { title: "Sans gluten", value: "sans_gluten" },
                    { title: "Sans maîs", value: "sans_mais" },
                    { title: "Sans sel ajouté", value: "sans_sels" },
                    { title: "Sans sucre ajouté", value: "sans_sucre" },
                ],
               
            },
        }),
        defineField({
            name: "poils",
            title: "Types de poils",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Blanc", value: "blanc" },
                    { title: "Fauve", value: "fauve" },
                    { title: "Noir", value: "noir" },
                    { title: "Sevrage", value: "sevrage" },

                ],
                
            },
        }),
        defineField({
            name: "taille_du_chien",
            title: "Taille du chien adulte",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "0 et 10kgs - Petite race", value: "petit_race" },
                    { title: "11 et 25kgs - Moyenne race", value: "moyenne_race" },
                    { title: "26 et 45kgs - Grande race", value: "grande_race" },
                    { title: "46kgs et plus - Race géante", value: "race_géante" },

                ],
               
            },
        }),
        defineField({
            name: "types_d_aliments",
            title: "Types d'aliments",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Croquettes", value: "croquettes" },
                    { title: "Mousse", value: "mousse" },
                    { title: "Pâtée en barquettes", value: "patee_en_barquettes" },
                    { title: "Pâtée en boites", value: "patee_en_boites" },
                    { title: "Pâtée en sachets", value: "patee_en_sachets" },

                ],
               
            },
        }),
        defineField({
            name: "saveur",
            title: "Saveur",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Agneau", value: "agneau" },
                    { title: "Boeuf", value: "boeuf" },
                    { title: "Canard", value: "canard" },
                    { title: "Tout type de poil", value: "tout_type_de_poil" },
                    { title: "Dinde", value: "dinde" },
                    { title: "Gibier", value: "gibier" },
                    { title: "Insectes", value: "insectes" },
                    { title: "Lapin", value: "lapin" },
                    { title: "Légumes", value: "legumes" },
                    { title: "Maquereau et sardine", value: "maquereau_et_sardine" },
                    { title: "Poisson blanc", value: "poisson_blanc" },
                    { title: "Porc ", value: "porc " },
                    { title: "Poulet", value: "poulet" },
                    { title: "Sanglier", value: "sanglier" },
                    { title: "Saumon", value: "saumon" },
                    { title: "Thon", value: "thon" },
                    { title: "Truite", value: "truite " },
                    { title: "Veau", value: "veau" },
                ],
               
            },
        }),


        defineField({
            name: "benefices_sante",
            title: "Bénefice santé",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Articulations", value: "articulations" },
                    { title: "Confort urinaire", value: "confort_urinaire" },
                    { title: "Croissance", value: "croissance" },
                    { title: "Digestion et Transit", value: "digestion_et_transit" },
                    { title: "Détox", value: "detox" },
                    { title: "Entretient et vitamines", value: "entretient_et_vitamines" },
                    { title: "Gestation et lactation", value: "gestation_et_lactation" },
                    { title: "Hypoallergénique", value: "hypoallergenique" },
                    { title: "Immunité", value: "immunite" },
                    { title: "Manque d'appétit ", value: "manque_d_appétit " },
                    { title: "Minéraux", value: "mineraux" },
                    { title: "Peau et pelage", value: "peau_et_pelage" },
                    { title: "Perte de poids", value: "perte_de_poids" },
                    { title: "Pigmentation ", value: "pigmentation " },
                    { title: "Ration ménagère ", value: "Ration_menagere" },
                    { title: "Soin des yeux  ", value: "Soin_des_yeux " },
                    { title: "Soutien rénal ", value: "soutien_renal" },
                    { title: "Sport, chiens de travail ", value: "sport_chiens_de_travail " },
                    { title: "Stérilisé", value: "sterilise" },
                    { title: "Vieillesse", value: "vieillesse" },
                ],
                
            },
        }),


        defineField({
            name: "detail",
            title: "Full Detail",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                    ],
                    lists: [{ title: 'Bullet', value: 'bullet' }],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                    }
                }
            ],
            description: "Detailed product more about the product"
        }),

        defineField({
            name: "variants",
            title: "Product Variants",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        {
                            name: "flavor",
                            title: "Flavor",
                            type: "string",
                        },
                        {
                            name: "taille",
                            title: "Size (kg)",
                            type: "string",
                        },
                        {
                            name: "price",
                            title: "Price",
                            type: "string",
                            validation: (Rule) => Rule.required().min(0),
                        },
                        {
                            name: "stock",
                            title: "Stock",
                            type: "number",
                            initialValue: 0,
                        },
                    ],
                    preview: {
                        select: {
                            flavor: "flavor",
                            taille: "taille",
                            price: "price",
                        },
                        prepare({ flavor, taille, price }) {
                            return {
                                title: `${flavor} - ${taille}`,
                                subtitle: `${price} €`,
                            };
                        },
                    },
                }),
            ],
        }),

        defineField({
            name: "status",
            title: "Product Status",
            type: "string",
            options: {
                list: [
                    { title: "New", value: "new" },
                    { title: "Hot", value: "hot" },
                    { title: "Sale", value: "sale" },
                ],
            },
        }),





        defineField({
            name: "reviewCount",
            title: "Review Count",
            type: "number",
            initialValue: 0
        }),

        defineField({
            name: "productType",
            title: "Product Type",
            type: "string",
            options: {
                list: [
                    { title: "Objet", value: "objet" },
                    { title: "Nourriture", value: "nourriture" },
                    { title: "Autres", value: "autres" },
                ],
            },
        }),

        defineField({
            name: "shippingTime",
            title: "Shipping Time",
            type: "string",
            options: {
                list: [
                    { title: "Express 1-3 days", value: "express" },
                    { title: "Standard 3-7 days", value: "standard" },
                    { title: "Economy 7-14 days", value: "economy" },
                    { title: "Global 10-21 days", value: "global" },
                ]
            }
        }),


    ],
    preview: {
        select: {
            title: "name",
            media: "images",
            subtitle: "price",
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            const image = media && media[0];
            return {
                title: title,
                media: image,
            };
        },
    },
})