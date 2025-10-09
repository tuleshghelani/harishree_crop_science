import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: ProductCategory[] = [
    {
      name: 'Insecticide',
      products: [
        { name: 'Proceed', 
          image: 'assets/products/PROCEED.png', 
          description: 'Advanced insect control solution',
          fullDescription: 'Proceed is our advanced insecticide formulation designed for comprehensive pest management. It offers rapid knockdown and long-lasting residual control against a broad spectrum of agricultural pests. The unique formulation ensures better crop coverage and enhanced resistance to wash-off, making it ideal for professional farmers seeking reliable pest control solutions.',
          url: 'product/proceed'
         },
        { name: 'Thio-h', image: 'assets/products/THIO-H.png', description: 'Effective pest management',
            fullDescription: 'Thio-h represents the latest in systemic insecticide technology. This powerful formulation penetrates plant tissues to provide protection from within, effectively controlling both sucking and chewing pests. Its balanced composition ensures crop safety while delivering outstanding pest control performance across various agricultural applications.',
            url: 'product/thio-h'
         },
        { name: 'Super FS', image: 'assets/products/SUPER FS.png', description: 'Premium insect protection',
            fullDescription: 'Super FS is our premium grade insecticide offering superior protection against multiple pest species. Its advanced formula combines fast action with extended protection periods, making it an excellent choice for high-value crops. The product features enhanced stability under various weather conditions and minimal impact on beneficial insects.',
            url: 'product/super-fs'
         },
        { name: 'Mpire 404', image: 'assets/products/MPIRE-404.png', description: 'Complete pest control',
            fullDescription: 'Mpire 404 delivers comprehensive pest management through its innovative dual-action formula. This professional-grade solution provides both contact and systemic activity, ensuring thorough pest elimination at all life stages. Its unique composition offers excellent crop safety while maintaining high efficacy against resistant pest populations.',
            url: 'product/mpire-404'
         },
         { name: 'H Fun', 
            image: 'assets/products/H FUN.png', 
            description: 'Specialized insecticide',
            fullDescription: 'H Fun is a specialized insecticide formulation engineered for targeted pest control. Its unique composition ensures rapid absorption and distribution throughout the plant system, providing comprehensive protection against a wide range of harmful insects while being gentle on beneficial organisms.',
            url: 'product/h-fun'
          },
          { name: 'Neem Pro', 
            image: 'assets/products/NEEM PRO.png', 
            description: 'Natural pest control',
            fullDescription: 'Neem Pro harnesses the power of natural neem extracts enhanced with advanced formulation technology. This eco-friendly solution provides effective control against multiple pest species while being safe for the environment. Its botanical origin ensures minimal residue concerns and better acceptance in organic farming.'
          },
          { name: 'Mission', 
            image: 'assets/products/MISSION.jpg', 
            description: 'Target-specific insecticide',
            fullDescription: 'Mission is a precision-engineered insecticide designed for specific pest targets. Its selective action ensures maximum effectiveness against target pests while minimizing impact on non-target organisms. The advanced formulation provides excellent rainfastness and extended protection periods.'
          },
          { name: 'Kavach', 
            image: 'assets/products/kavach.png', 
            description: 'Protective insect shield',
            fullDescription: 'Kavach creates a powerful protective shield against destructive insect pests. This innovative formulation provides both contact and residual activity, ensuring comprehensive crop protection. Its unique shield technology ensures better adherence to plant surfaces and resistance to environmental factors.'
          },
          { name: 'Pride-H', 
            image: 'assets/products/PRIDE-H_2.png', 
            description: 'Professional pest control',
            fullDescription: 'Pride-H represents professional-grade pest management technology. This advanced formulation combines rapid knockdown with long-lasting protection, making it ideal for commercial farming operations. Its balanced composition ensures optimal performance across various crop stages and conditions.'
          },
          { name: 'Hmida', 
            image: 'assets/products/H MIDA.png', 
            description: 'Advanced insect management',
            fullDescription: 'Hmida delivers cutting-edge insect management through its innovative systemic action. The product provides comprehensive protection by controlling pests at multiple life stages. Its advanced formulation ensures quick absorption and uniform distribution throughout the plant system.'
          },
          { name: 'Dr. Supreme', 
            image: 'assets/products/DR.SUPREME.png', 
            description: 'Superior insect control',
            fullDescription: 'Dr. Supreme offers superior pest control through its advanced dual-mode action. This premium formulation provides both preventive and curative benefits, ensuring complete protection against various pest infestations. Its superior coverage and adherence properties enhance overall efficacy.'
          },
          { name: 'Buldozer', 
            image: 'assets/products/Buldozer.png', 
            description: 'Powerful pest elimination',
            fullDescription: 'Buldozer is a powerful broad-spectrum insecticide designed for situations requiring robust pest control. Its concentrated formulation delivers quick knockdown and lasting residual action. The product\'s unique chemistry ensures effective control even against resistant pest populations.'
          },
          { name: 'Combi 505', 
            image: 'assets/products/COMBI 505.png', 
            description: 'Combination insecticide',
            fullDescription: 'Combi 505 combines multiple active ingredients for enhanced pest control. This unique combination provides broader spectrum activity and better resistance management. The synergistic action of its components ensures superior control of various pest complexes.'
          },
          { name: 'Cora-5', 
            image: 'assets/products/CORA-5.jpg', 
            description: 'Comprehensive protection',
            fullDescription: 'Cora-5 provides comprehensive protection through its advanced formulation technology. This versatile product offers excellent control over multiple pest species while being safe for crops. Its unique composition ensures better coverage and longer-lasting protection.'
          },
          { name: 'FI 40', 
            image: 'assets/products/insecticide/FI-40.jpg', 
            description: 'Fipronil 40% + Imidacloprid 40% WG dual-action',
            fullDescription: 'FI 40 (Fipronil 40% + Imidacloprid 40% WG) combines two proven actives to deliver both contact and systemic action against tough pest complexes. The water-dispersible granule ensures quick dispersion, uniform spray coverage and strong residual control on key crops. Designed for professional growers, FI 40 provides rapid knockdown of chewing and sucking insects while promoting excellent crop safety and resistance-management value.'
          },
          { name: 'Hilthene', 
            image: 'assets/products/insecticide/hilthene.jpg', 
            description: 'Acephate 75% SP broad-spectrum control',
            fullDescription: 'Hilthene (Acephate 75% SP) is a professional, systemic and contact insecticide that provides quick knockdown and dependable control of caterpillars, aphids and other economic pests. The high-quality SP formulation dissolves rapidly, offering consistent performance, excellent leaf coverage and strong compatibility in tank mixes. Trusted by growers for its reliability and value across vegetables, cotton and other labeled crops.'
          },
          { name: 'Chilli H', 
            image: 'assets/products/insecticide/chilli-h.jpg', 
            description: 'Fipronil 2.92% EC contact and stomach action',
            fullDescription: 'Chilli H (Fipronil 2.92% EC) is engineered for fast, decisive control of thrips, mites and other hard-to-manage pests in chilli and vegetable crops. Its advanced EC base ensures superior penetration and persistent residual activity, helping reduce re-infestation. With excellent rainfastness and leaf adherence, Chilli H delivers premium protection while supporting clean, market-ready produce.'
          },
          { name: 'Chloro Shield 20', 
            image: 'assets/products/insecticide/chloro-shield-20.jpg', 
            description: 'Chlorpyriphos 20% EC reliable broad-spectrum',
            fullDescription: 'Chloro Shield 20 (Chlorpyriphos 20% EC) is a robust organophosphate insecticide offering dependable contact, stomach and fumigant action. Ideal for soil and foliar insect management, it effectively controls termites, borers and sucking pests across multiple crops. The optimized EC formulation ensures strong knockdown, lasting field performance and flexible application options for professional programs.'
          },
          { name: 'Cloro GR', 
            image: 'assets/products/insecticide/cloro-gr.jpg', 
            description: 'Chlorpyriphos 10% GR soil insecticide',
            fullDescription: 'Cloro GR (Chlorpyriphos 10% GR) provides targeted, season-long protection from soil-dwelling insects including termites and root grubs. The granular formulation enables convenient basal application and uniform distribution in the root zone, safeguarding emerging seedlings and establishing crops. Designed for reliability and ease of use in nursery and field situations.'
          },
          { name: 'DR. Delta', 
            image: 'assets/products/insecticide/dr-delta.jpg', 
            description: 'Deltamethrin 2.8% EC fast knockdown pyrethroid',
            fullDescription: 'DR. Delta (Deltamethrin 2.8% EC) is a premium pyrethroid delivering lightning-fast knockdown and excellent residual control of lepidopteran and sucking pests. Its advanced solvent system improves spread, coverage and rainfastness while remaining gentle on crops when used as directed. A go-to choice for quick, visible results in vegetables, cotton and other labeled crops.'
          },
          { name: 'Eclipse', 
            image: 'assets/products/insecticide/eclipse.jpg', 
            description: 'Ethion 40% + Cypermethrin 5% EC synergy mix',
            fullDescription: 'Eclipse (Ethion 40% + Cypermethrin 5% EC) combines organophosphate and pyrethroid chemistries for broad-spectrum, dual-mode action. The formulation delivers rapid knockdown with strong residual effect, controlling both chewing and sucking pests over extended periods. Optimized for tank-mix compatibility and consistent performance across climates.'
          },
          { name: 'Extra Mida 70', 
            image: 'assets/products/insecticide/extra-mida-70.jpg', 
            description: 'Imidacloprid 70% WG high-load systemic',
            fullDescription: 'Extra Mida 70 (Imidacloprid 70% WG) is a high-load neonicotinoid that provides powerful systemic control of aphids, whiteflies and jassids at low use rates. The premium WG granules disperse instantly in water, offering excellent spray stability, superior leaf coverage and long-lasting protection for professional, residue-conscious programs.'
          },
          { name: 'Extra Profex', 
            image: 'assets/products/insecticide/extra-profex.jpg', 
            description: 'Profenophos 50% EC contact and stomach poison',
            fullDescription: 'Extra Profex (Profenophos 50% EC) is a trusted broad-spectrum insecticide providing strong contact and stomach action against bollworms, mites and other persistent pests. Its optimized EC technology ensures deep canopy reach, superior coverage and dependable field performance while fitting well into rotation strategies.'
          },
          { name: 'H Cyper 25', 
            image: 'assets/products/insecticide/h-cyper-25.jpg', 
            description: 'Cypermethrin 25% EC versatile pyrethroid',
            fullDescription: 'H Cyper 25 (Cypermethrin 25% EC) offers rapid knockdown and residual control of a wide spectrum of chewing and sucking insects. The robust pyrethroid formulation delivers reliable performance under varied field conditions, making it a practical, economical choice for vegetables, pulses and fiber crops.'
          },
          { name: 'Hil Thene', 
            image: 'assets/products/HILTHENE.png', 
            description: 'Long-lasting protection',
            fullDescription: 'Hil Thene offers extended protection against various insect pests. Its innovative slow-release technology ensures consistent pest control over longer periods. The product\'s unique formulation provides excellent stability under various environmental conditions.'
          },
          { name: 'H Gor', 
            image: 'assets/products/insecticide/h-gor.jpg', 
            description: 'Dimethoate 30% EC systemic and contact',
            fullDescription: 'H Gor (Dimethoate 30% EC) is a systemic and contact organophosphate effective against aphids, thrips and jassids. It moves within plant tissues to protect new growth while providing strong contact action on exposed pests. The formulation balances efficacy with crop safety for dependable, professional results.'
          }
      ]
    },
    {
      name: 'Fungicide',
      products: [
        { name: 'X-Pro', image: 'assets/products/X-PRO.png', description: 'Professional fungus control' },
        {
          name: 'Confer Plus',
          image: 'assets/products/fungicide/confer-plus.jpg',
          description: 'Hexaconazole 5% SC systemic fungicide',
          fullDescription: 'Confer Plus (Hexaconazole 5% SC) is a premium, broad-spectrum systemic fungicide engineered for modern farming. Its advanced triazole chemistry moves rapidly within plant tissues to stop fungal growth at multiple stages, delivering fast-acting, long-lasting protection. Ideal for crops such as cereals, fruits and vegetables, it effectively controls diseases like powdery mildew, sheath blight and leaf spots. The optimized suspension concentrate ensures superior leaf coverage, rainfastness and excellent tank-mix compatibility. Designed for professional use, Confer Plus supports higher yield quality with reliable performance across climates and application methods while maintaining a strong safety profile when used as directed.'
        },
        { name: 'Tej-65', image: 'assets/products/TEJ 65.png', description: 'Rapid fungicide action' },
        { name: 'Chemistry', image: 'assets/products/CHEMISTRY.jpg', description: 'Scientific fungal control' },
        {
          name: 'N-Tracol',
          image: 'assets/products/fungicide/n-tracol.jpg',
          description: 'Propineb 70% WP contact fungicide',
          fullDescription: 'N-Tracol (Propineb 70% WP) is a premium contact fungicide formulated for exceptional disease control across a wide range of crops. This professional-grade solution creates a powerful protective barrier that prevents fungal spore germination and inhibits mycelial growth. With its multi-site mode of action, N-Tracol effectively manages resistance development while providing outstanding control of downy mildew, early and late blights, and various leaf spots. The advanced wettable powder formulation ensures superior coverage, excellent rainfastness, and optimal adhesion to plant surfaces, delivering consistent protection even under challenging weather conditions. Trusted by commercial growers, N-Tracol safeguards crop quality and yield potential with its reliable performance and excellent crop safety profile.',
          url: 'product/n-tracol'
        },
        {
          name: 'Sulf Green',
          image: 'assets/products/fungicide/sulf-green.jpg',
          description: 'Sulphur 80% WDG versatile fungicide',
          fullDescription: 'Sulf Green (Sulphur 80% WDG) is a versatile, high-performance fungicide and acaricide formulated for modern agriculture. This water-dispersible granule delivers exceptional control of powdery mildew, rust diseases, and mite infestations across fruits, vegetables, and field crops. The premium-grade elemental sulphur provides both preventive and curative action through multiple biochemical pathways, effectively disrupting fungal respiration while maintaining excellent crop safety. Sulf Green\'s advanced formulation technology ensures quick dispersion, uniform coverage, and enhanced adhesion to plant surfaces, resulting in superior disease control even under variable weather conditions. With its eco-friendly profile and minimal residue concerns, Sulf Green integrates seamlessly into sustainable pest management programs, supporting healthier crops and optimized yields for professional growers.',
          url: 'product/sulf-green'
        },
        { name: 'Saf-63', image: 'assets/products/SAF-63.png', description: 'Safe and effective' },
        {
          name: 'Milet Gold',
          image: 'assets/products/fungicide/milet-gold.jpg',
          description: 'Metalaxyl 8% + Mancozeb 64% WP dual-action',
          fullDescription: 'Milet Gold combines Metalaxyl 8% with Mancozeb 64% WP to deliver a powerful dual-action shield against both systemic and contact fungal pathogens. The Metalaxyl component targets oomycete diseases from within the plant, while Mancozeb forms a protective barrier on the leaf surface for extended coverage. This synergy provides dependable control of late blight, downy mildew and seedling diseases in potatoes, grapes, vegetables and oilseeds. With excellent dispersibility, uniform coverage and strong resistance-management value, Milet Gold is a professional choice for preventive and early curative programs that protect yield and quality.'
        },
        { name: 'HTM', image: 'assets/products/HTM.png', description: 'Advanced fungicide formula' },
        { name: 'King', image: 'assets/products/KING_2.png', description: 'Superior fungal control' },
        { name: 'Captop', image: 'assets/products/CAPTOP.jpg', description: 'Complete fungal protection' },
        {
          name: 'Tebuja',
          image: 'assets/products/fungicide/tebuja.jpg',
          description: 'Tebuconazole 25.9% EC systemic fungicide',
          fullDescription: 'Tebuja (Tebuconazole 25.9% EC) is a premium systemic fungicide engineered for exceptional disease control across diverse crops. This professional-grade emulsifiable concentrate rapidly penetrates plant tissues and translocates throughout the vascular system, providing both protective and curative action against a broad spectrum of fungal pathogens. Tebuja\'s advanced triazole chemistry disrupts ergosterol biosynthesis, effectively halting fungal cell membrane formation and growth. Highly effective against powdery mildew, rusts, leaf spots, and blights in cereals, fruits, vegetables, and ornamentals, Tebuja delivers long-lasting protection with excellent rainfastness. The optimized formulation ensures superior coverage, enhanced absorption, and extended residual activity, making it an essential component of integrated disease management programs for commercial growers seeking reliable performance and superior harvest quality.',
          url: 'product/tebuja'
        },
        { name: 'Haristin', image: 'assets/products/HARISTIN.png', description: 'Professional fungicide' },
        {
          name: 'Hari 45',
          image: 'assets/products/fungicide/hari-45.jpg',
          description: 'Mancozeb 75% WP contact fungicide',
          fullDescription: 'Hari-45 (Mancozeb 75% WP) is a trusted, multi-site contact fungicide that delivers reliable protection against a broad spectrum of foliar diseases. Its multi-mode activity minimizes resistance risk while safeguarding tender growth, canopy health and photosynthetic efficiency. Suitable for potatoes, pulses, fruits and vegetables, Hari-45 prevents early and late blights, leaf spots and rusts when applied preventively. The premium wettable powder mixes easily, spreads uniformly and adheres well for consistent coverage, making it a practical, performance-driven choice for growers seeking dependable disease control and market-ready produce.'
        },
        {
          name: 'Hatayu',
          image: 'assets/products/fungicide/hatayu.jpg',
          description: 'Chlorothalonil 75% WP durable barrier',
          fullDescription: 'Hatayu (Chlorothalonil 75% WP) is a high-performance, contact fungicide known for its durable protective barrier and excellent residual action. It works on multiple sites of the pathogen, helping delay resistance while providing broad-spectrum control of early blight, fruit rots and leaf spots across vegetables, fruit crops and ornamentals. The fine, free-flowing WP formulation disperses quickly in water, ensuring even coverage and dependable performance under varied field conditions. Use Hatayu as a preventive spray or within a rotation program to keep foliage clean, healthy and productive throughout the season.'
        },
        {
          name: 'Magic',
          image: 'assets/products/fungicide/magic.jpg',
          description: 'Validamycin 3% L specialized systemic',
          fullDescription: 'Magic (Validamycin 3% L) is a specialized systemic antibiotic fungicide highly effective against sheath blight and other diseases caused by Rhizoctonia spp. The liquid formulation absorbs readily and translocates within plant tissues to stop disease development quickly while remaining gentle on crops. Magic fits seamlessly into integrated disease management programs with strong efficacy in paddy and horticultural crops. Its targeted mode of action, rainfastness and ease of use make it a professional solution that helps preserve crop quality and maximize yields with fewer application rounds.'
        },
        {
          name: 'Super COC',
          image: 'assets/products/fungicide/super-coc.jpg',
          description: 'Copper Oxychloride 50% WP broad-spectrum',
          fullDescription: 'Super COC (Copper Oxychloride containing copper content 50% WP) is a professional-grade, broad-spectrum fungicide and bactericide formulated for superior disease control. This premium wettable powder creates a protective barrier on plant surfaces that disrupts multiple cellular processes in pathogenic organisms. With its multi-site mode of action, Super COC effectively manages resistance development while providing outstanding control of downy mildew, blights, anthracnose, bacterial spots, and various fungal diseases across fruits, vegetables, and plantation crops. The optimized particle size ensures excellent suspension stability, uniform coverage, and enhanced adhesion to plant surfaces, delivering consistent protection even under challenging weather conditions. As an essential component of integrated disease management programs, Super COC supports healthier crops and optimized yields with its reliable performance and excellent crop safety profile.',
          url: 'product/super-coc'
        },
        {
          name: 'H-Tilt',
          image: 'assets/products/fungicide/h-tilt.jpg',
          description: 'Propiconazole 25% EC systemic triazole',
          fullDescription: 'H-Tilt (Propiconazole 25% EC) is a premium systemic triazole fungicide formulated for rapid absorption and deep movement within the plant. It inhibits ergosterol biosynthesis, halting fungal growth and ensuring strong curative and protective action. Highly effective on rusts, leaf spots and sheath blight in cereals, oilseeds and horticultural crops, H-Tilt offers excellent rainfastness and crop safety when used as directed. The emulsifiable concentrate delivers consistent performance in both solo and tank-mix programs, supporting healthier canopies, longer green leaf area duration and superior harvest quality.'
        }
      ]
    },
    {
      name: 'Herbicide',
      products: [
        { 
          name: 'Laser', 
          image: 'assets/products/herbicide/laser.jpg', 
          description: 'Precise weed control',
          fullDescription: 'Laser (Quizalofop-p-ethyl 5% EC) is a selective post-emergence herbicide designed for superior grass weed control in broadleaf crops. This advanced emulsifiable concentrate rapidly penetrates leaf tissues and translocates to growing points, effectively inhibiting fatty acid synthesis and halting weed growth. Laser provides exceptional control of annual and perennial grass weeds in soybeans, cotton, pulses, oilseeds, and vegetables, while maintaining excellent crop safety. The optimized formulation ensures quick absorption, rainfastness, and extended residual activity, making it an essential component of integrated weed management programs for commercial growers seeking reliable performance and superior harvest quality.',
          url: 'product/laser'
        },
        { 
          name: 'Paddy', 
          image: 'assets/products/herbicide/paddy.jpg', 
          description: 'Rice crop protection',
          fullDescription: 'Paddy (Pretilachlor 50% EC) is a premium pre-emergence herbicide specifically formulated for rice cultivation. This professional-grade emulsifiable concentrate creates a powerful soil barrier that prevents weed seed germination and early seedling growth. With its selective action, Paddy effectively controls annual grasses, sedges, and certain broadleaf weeds while maintaining excellent crop safety in transplanted and direct-seeded rice. The advanced formulation ensures optimal soil binding, extended residual activity, and consistent performance even under varying soil moisture conditions. Trusted by commercial rice growers, Paddy supports higher yield potential by eliminating early weed competition during the critical crop establishment phase.',
          url: 'product/paddy'
        },
        { 
          name: 'Oxy Green', 
          image: 'assets/products/herbicide/oxy-green.jpg', 
          description: 'Eco-friendly herbicide',
          fullDescription: 'Oxy Green (Oxyfluorfen 23.5% EC) is a versatile contact herbicide with residual activity, designed for pre-emergence and early post-emergence weed control. This premium emulsifiable concentrate creates a soil barrier that prevents weed emergence while also controlling small emerged weeds through contact action. Highly effective against annual broadleaf weeds and grasses in vegetables, fruit crops, plantation crops, and ornamentals, Oxy Green provides long-lasting protection with minimal soil mobility. The optimized formulation ensures excellent soil binding, UV stability, and consistent performance across various soil types and environmental conditions. As an essential component of integrated weed management programs, Oxy Green supports cleaner fields and optimized yields with its reliable performance and excellent crop safety profile when used as directed.',
          url: 'product/oxy-green'
        },
        { 
          name: 'Round', 
          image: 'assets/products/herbicide/round.jpg', 
          description: 'Complete weed management',
          fullDescription: 'Round (Glyphosate 41% SL) is a professional-grade, non-selective systemic herbicide formulated for comprehensive weed management. This soluble liquid concentrate is rapidly absorbed through foliage and translocated throughout the plant, including roots and rhizomes, for complete control of annual and perennial weeds, grasses, and woody brush. With its unique mode of action inhibiting the EPSP synthase enzyme, Round effectively eliminates even the most stubborn weeds while breaking down into natural soil components. The advanced formulation includes premium surfactants for enhanced absorption, rainfastness, and consistent performance across various environmental conditions. Ideal for pre-planting field preparation, non-crop areas, and directed applications in plantation crops, Round delivers reliable results for commercial growers and land managers seeking effective vegetation control.',
          url: 'product/round'
        },
        { 
          name: 'Green Out', 
          image: 'assets/products/GREEN OUT.png', 
          description: 'Effective weed control',
          fullDescription: 'Green Out (Paraquat Dichloride 24% SL) is a fast-acting, non-selective contact herbicide designed for rapid vegetation control. This professional-grade soluble liquid concentrate delivers visible results within hours of application by disrupting photosynthesis and causing rapid desiccation of green plant tissues. Highly effective against a broad spectrum of annual grasses and broadleaf weeds, Green Out becomes inactive upon soil contact, allowing for immediate planting in conservation tillage systems. The optimized formulation ensures excellent coverage, rapid absorption, and reliable performance even under challenging weather conditions. As an essential tool for pre-plant burndown, inter-row weed control, and harvest aid applications, Green Out supports efficient field operations and weed management strategies for commercial growers seeking quick, dependable results.',
          url: 'product/green-out'
        },
        { 
          name: 'Glufo13', 
          image: 'assets/products/herbicide/gluf013.jpg', 
          description: 'Professional herbicide',
          fullDescription: 'Glufo13 (Glufosinate ammonium 13.5% SL) is a broad-spectrum, non-selective contact herbicide with limited systemic activity. This premium soluble liquid formulation disrupts glutamine synthesis in plants, causing rapid ammonia accumulation and cell destruction. Highly effective against a wide range of annual and perennial grasses and broadleaf weeds, including those resistant to glyphosate, Glufo13 provides quick visible results while breaking down readily in the environment. The advanced formulation ensures excellent coverage, rapid absorption, and reliable performance across various environmental conditions. Ideal for directed applications in orchards, vineyards, plantation crops, and non-crop areas, Glufo13 delivers dependable weed control for commercial growers seeking an alternative mode of action in their resistance management programs.',
          url: 'product/gluf013'
        },
        { 
          name: 'H-Man', 
          image: 'assets/products/herbicide/h-man.jpg', 
          description: 'Advanced weed solution',
          fullDescription: 'H-Man (2,4-D Amine Salt 58% SL) is a selective systemic herbicide specifically formulated for broadleaf weed control. This professional-grade soluble liquid concentrate is rapidly absorbed through foliage and roots, translocating throughout the plant to disrupt normal growth processes through auxin-like activity. Highly effective against a wide range of annual and perennial broadleaf weeds in cereals, maize, sugarcane, and non-crop areas, H-Man provides economical and reliable control while preserving grass species. The advanced formulation ensures excellent coverage, quick absorption, and consistent performance across various environmental conditions. As an essential component of integrated weed management programs, H-Man supports cleaner fields and optimized yields with its proven performance and excellent crop safety profile when used as directed.',
          url: 'product/h-man'
        },
        { 
          name: 'Pendi-Pro', 
          image: 'assets/products/herbicide/pendi-pro.jpg', 
          description: 'Premium pre-emergence control',
          fullDescription: 'Pendi-Pro (Pendimethalin 30% EC) is a premium pre-emergence herbicide designed for residual weed control in multiple crops. This professional-grade emulsifiable concentrate creates a powerful soil barrier that prevents weed seed germination and early root development. Highly effective against annual grasses and certain broadleaf weeds in cereals, pulses, oilseeds, vegetables, and plantation crops, Pendi-Pro provides extended protection during the critical crop establishment phase. The optimized formulation ensures excellent soil binding, UV stability, and consistent performance across various soil types and environmental conditions. With its distinctive mode of action inhibiting cell division in meristematic tissues, Pendi-Pro serves as an essential resistance management tool while supporting cleaner fields and reduced weed competition for commercial growers seeking reliable, long-lasting weed control.',
          url: 'product/pendi-pro'
        },
        { 
          name: 'T-10', 
          image: 'assets/products/herbicide/t-10.jpg', 
          description: 'Targeted weed elimination',
          fullDescription: 'T-10 (Metribuzin 70% WP) is a versatile selective herbicide with both contact and residual activity. This premium wettable powder formulation is absorbed by roots and foliage, inhibiting photosynthesis in susceptible weed species while maintaining safety in labeled crops. Highly effective against annual broadleaf weeds and certain grasses in potatoes, soybeans, tomatoes, and other vegetables, T-10 provides flexible application timing from pre-plant to early post-emergence. The advanced formulation ensures uniform distribution, excellent soil activity, and consistent performance across various soil types and environmental conditions. With its unique mode of action, T-10 serves as a valuable resistance management tool while supporting cleaner fields and optimized crop development for commercial growers seeking reliable, broad-spectrum weed control.',
          url: 'product/t-10'
        },
        { 
          name: 'T-Super', 
          image: 'assets/products/herbicide/t-super.jpg', 
          description: 'Superior weed control',
          fullDescription: 'T-Super (Sulfosulfuron 75% WG) is a premium selective herbicide specifically formulated for post-emergence grass and broadleaf weed control in wheat. This advanced water-dispersible granule is rapidly absorbed through foliage and roots, inhibiting the ALS enzyme and halting amino acid synthesis in susceptible weed species. Highly effective against problematic weeds including Phalaris minor and broadleaf species, T-Super provides exceptional crop safety in wheat when used as directed. The optimized formulation ensures excellent dispersion, rapid absorption, and consistent performance across various environmental conditions. With its low use rate and extended soil activity, T-Super delivers cost-effective, reliable weed control while serving as an important component of resistance management programs for commercial wheat growers seeking to maximize yield potential.',
          url: 'product/t-super'
        },
        { 
          name: 'Imaza 10', 
          image: 'assets/products/herbicide/imaza10.jpg', 
          description: 'Specialized herbicide',
          fullDescription: 'Imaza 10 (Imazethapyr 10% SL) is a selective systemic herbicide designed for pre and post-emergence weed control in legume crops. This advanced soluble liquid formulation is absorbed by roots and foliage, translocating throughout the plant to inhibit the ALS enzyme and halt amino acid synthesis in susceptible weed species. Highly effective against a broad spectrum of annual grasses and broadleaf weeds in soybeans, groundnuts, and other pulses, Imaza 10 provides extended residual activity for season-long protection. The optimized formulation ensures rapid absorption, excellent translocation, and consistent performance across various soil types and environmental conditions. With its unique mode of action, Imaza 10 serves as a valuable resistance management tool while supporting cleaner fields and optimized crop development for commercial growers seeking reliable, broad-spectrum weed control with excellent crop safety.',
          url: 'product/imaza10'
        }
      ]
    },
    {
      name: 'PGR',
      products: [
        { name: 'Black Gold', image: 'assets/products/BLACK GOLD.png', description: 'Premium growth regulator' },
        { name: 'Husi', image: 'assets/products/HUSI.png', description: 'Advanced plant growth' },
        { name: 'H Pro', image: 'assets/products/H PRO.png', description: 'Professional PGR solution' },
        { name: 'HC-Gold', image: 'assets/products/HC-GOLD.png', description: 'Superior growth control' },
        { name: 'Dhani Wet', image: 'assets/products/DHANI WET.png', description: 'Enhanced absorption' },        
        { name: 'Black Diamond', image: 'assets/products/BLACK DIAMOND.png', description: 'Premium growth regulator' },
        { 
          name: 'Advocate', 
          image: 'assets/products/PGR/advocate.jpg', 
          description: 'Advanced amino acid & vitamins bio stimulant',
          fullDescription: 'Advocate is a premium bio stimulant formulation containing essential amino acids and vitamins that enhance plant metabolism and growth. This advanced solution promotes stronger root development, improves nutrient uptake, and increases crop resilience against environmental stressors. Regular application results in healthier plants with improved yield potential and quality.',
          url: 'product/advocate'
        },
        { 
          name: 'Black Diamond', 
          image: 'assets/products/PGR/black-diamond.jpg', 
          description: 'Premium humic acid 98% soil conditioner',
          fullDescription: 'Black Diamond contains 98% humic acid, making it an exceptional soil conditioner for stronger, longer, and healthier roots and plants. This premium formulation improves soil structure, enhances nutrient availability, and stimulates beneficial microbial activity. Black Diamond increases water retention capacity, reduces fertilizer requirements, and promotes sustainable agricultural practices for optimal plant growth and development.',
          url: 'product/black-diamond'
        },
        { 
          name: 'Bonus Plus', 
          image: 'assets/products/PGR/bonus-plus.jpg', 
          description: 'Professional plant growth promoter',
          fullDescription: 'Bonus Plus is a specialized plant growth promoter designed to enhance overall plant development and productivity. This scientifically formulated solution stimulates cell division and elongation, resulting in improved vegetative growth and reproductive development. Regular application leads to stronger plants with enhanced flowering, fruiting, and yield potential while promoting natural resistance to environmental stresses.',
          url: 'product/bonus-plus'
        },
        { 
          name: 'Dr.Root', 
          image: 'assets/products/PGR/dr.root.jpg', 
          description: 'Specialized organic root development supplement',
          fullDescription: 'Dr.Root is an organic plant supplement specifically formulated to enhance root development and function. This premium product stimulates root initiation, elongation, and branching, creating a stronger foundation for plant growth. The organic formulation improves nutrient absorption efficiency, enhances drought tolerance, and promotes beneficial soil microorganism activity for sustainable agricultural practices and optimal plant performance.',
          url: 'product/dr-root'
        },
        { 
          name: 'Nutri Power Gold', 
          image: 'assets/products/PGR/nutri-power-gold.jpg', 
          description: 'Premium potassium humate with organic carbon',
          fullDescription: 'Nutri Power Gold combines 98% potassium humate with 2% organic carbon to create a powerful soil amendment and plant growth enhancer. This premium formulation improves soil structure, increases cation exchange capacity, and enhances nutrient availability. Regular application results in better water retention, reduced fertilizer requirements, and improved overall soil health, leading to stronger plants with higher yield potential and quality.',
          url: 'product/nutri-power-gold'
        },
        { 
          name: 'Silva', 
          image: 'assets/products/PGR/silva.jpg', 
          description: 'Advanced spreader activator for enhanced absorption',
          fullDescription: 'Silva is a professional-grade spreader activator designed to maximize the effectiveness of agricultural sprays. This advanced formulation reduces surface tension, improves spray coverage, and enhances absorption of nutrients and crop protection products. Silva ensures uniform distribution on plant surfaces, increases rainfastness, and optimizes the performance of tank-mixed products for more efficient and economical crop management.',
          url: 'product/silva'
        }
      ]
    }
  ];

  constructor() {}

  getAllCategories(): Observable<ProductCategory[]> {
    return of(this.categories);
  }

  getCategoryByName(name: string): Observable<ProductCategory | undefined> {
    return of(this.categories.find(category => category.name === name));
  }

  getAllProducts(): Observable<Product[]> {
    const allProducts = this.categories.reduce((acc, category) => {
      return [...acc, ...category.products];
    }, [] as Product[]);
    return of(allProducts);
  }

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    const category = this.categories.find(cat => cat.name === categoryName);
    return of(category ? category.products : []);
  }

  searchProducts(query: string): Observable<Product[]> {
    const searchTerm = query.toLowerCase();
    const matchingProducts = this.categories.reduce((acc, category) => {
      const matches = category.products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
      );
      return [...acc, ...matches];
    }, [] as Product[]);
    return of(matchingProducts);
  }
}