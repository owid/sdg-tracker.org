
export interface Goal {
    slug: string
    name: string
    title: string
    description?: string
    targets: {
        title: string,
        figureDesc?: string
        figures?: string[]
    }[]
}

// Goal 1
const NoPoverty: Goal = {
    slug: "no-poverty",
    name: "No Poverty",
    title: "End poverty in all its forms everywhere",
    description: `Extreme poverty rates have been cut by more than half since 1990. While this is a remarkable achievement, one in five people in developing regions still live on less than $1.90 a day, and there are millions more who make little more than this daily amount, plus many people risk slipping back into poverty.`,
    targets: [
        {
            // 1.1
            title: "By 2030, eradicate extreme poverty for all people everywhere, currently measured as people living on less than $1.25 a day",
            figures: ["share-of-the-population-living-in-extreme-poverty?tab=map&minimal=1"]
        },
        {
            // 1.2
            title: "By 2030, reduce at least by half the proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions",
            figures: ["share-of-population-living-in-poverty-by-national-poverty-lines?country=BGD+IND+NPL+PAK"]
        },
        {
            title: "Implement nationally appropriate social protection systems and measures for all, including floors, and by 2030 achieve substantial coverage of the poor and the vulnerable"
        },
        {
            // 1.3
            title: "By 2030, ensure that all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance",
            figures: ["share-of-population-with-access-to-basic-infrastructure-services?country=WLD"]
        },
        {
            title: "By 2030, build the resilience of the poor and those in vulnerable situations and reduce their exposure and vulnerability to climate-related extreme events and other economic, social and environmental shocks and disasters"
        },
        {
            title: "Ensure significant mobilization of resources from a variety of sources, including through enhanced development cooperation, in order to provide adequate and predictable means for developing countries, in particular least developed countries, to implement programmes and policies to end poverty in all its dimensions"
        },
        {
            title: "Create sound policy frameworks at the national, regional and international levels, based on pro-poor and gender-sensitive development strategies, to support accelerated investment in poverty eradication actions"
        }
    ]
}

// Goal 2
const ZeroHunger: Goal = {
    slug: "zero-hunger",
    name: "Zero Hunger",
    title: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture",
    description: `A profound change of the global food and agriculture system is needed if we are to nourish today’s 795 million hungry and the additional 2 billion people expected by 2050.`
    targets: [
        {
            // 2.1
            title: "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round",
            figures: ["prevalence-of-undernourishment?tab=chart&country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        },
        {
            title: "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons"
        },
        {
            title: "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment"
        },
        {
            title: "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality"
        },
        {
            title: "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed"
        },
        {
            title: "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries"
        },
        {
            title: "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round"
        },
        {
            title: "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility"
        }
    ]
}

// Goal 3
const GoodHealth: Goal = {
    slug: "good-health",
    name: "Good Health and Well-Being",
    title: "Ensure healthy lives and promote well-being for all at all ages",
    description: `Ensuring healthy lives and promoting the well-being for all at all ages is essential to sustainable development. Significant strides have been made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality. Major progress has been made on increasing access to clean water and sanitation, reducing malaria, tuberculosis, polio and the spread of HIV/AIDS. However, many more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues.`,
    targets: [
        {
            // 3.1
            title: "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births",
            figures: ["maternal-mortality?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        },
        {
            // 3.2
            title: "By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births",
            figures: ["child-mortality-rate-per-1000-live-births"]
        },
        {
            // 3.3
            title: "By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases",
            figureDesc: `The visualisations below present global-level data on communicable diseases including AIDS, tuberculosis and malaria. Broader and long-term coverage is available on some of these health issues at our entries on [HIV/AIDS](/hiv-aids/) and [Malaria](/malaria/).`,
            figures: [
                "number-of-new-hiv-infections-per-1000-uninfected-population-aged-15-49?country=BGD+IND+NPL+PAK+ZAF+OWID_WRL",
                "tuberculosis-incidence-per-100000-people?tab=map",
                "malaria-incidence-per-1000-population",
                "global-malaria-deaths-by-world-region"
            ]
        },
        {
            // 3.4
            title: "By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being",
            figures: ["mortality-from-non-communicable-diseases", "suicide-mortality-rate"]
        },
        {
            title: "Strengthen the prevention and treatment of substance abuse, including narcotic drug abuse and harmful use of alcohol"
        },
        {
            // 3.6
            title: "By 2020, halve the number of global deaths and injuries from road traffic accidents",
            figures: ["mortality-road-injuries?tab=chart"]
        },
        {
            // 3.7
            title: "By 2030, ensure universal access to sexual and reproductive health-care services, including for family planning, information and education, and the integration of reproductive health into national strategies and programmes",
            figures: ["demand-for-family-planning", "adolescent-birth-rate?tab=chart"]
        },
        {
            title: "Achieve universal health coverage, including financial risk protection, access to quality essential health-care services and access to safe, effective, quality and affordable essential medicines and vaccines for all"
        },
        {
            // 3.9
            title: "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
            figures: ["death-rate-by-source-from-air-pollution", "death-rate-from-ambient-particulate-air-pollution-per-100000?tab=map&amp;year=2015&amp;country=BGD+IND+NPL+PAK"]
        },
        {
            // 3.a
            title: "Strengthen the implementation of the World Health Organization Framework Convention on Tobacco Control in all countries, as appropriate",
            figureDesc: `The charts below provide a global overview of the prevalence of smoking in people aged 15 years and older, by gender. We cover the topic of smoking — including attributable deaths and secondhand smoke — in our entry available [here](/smoking/).`,
            figures: ["share-of-men-who-are-smoking?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL", "share-of-women-who-are-smoking"]
        },
        {
            // 3.b
            title: "Support the research and development of vaccines and medicines for the communicable and noncommunicable diseases that primarily affect developing countries, provide access to affordable essential medicines and vaccines, in accordance with the Doha Declaration on the TRIPS Agreement and Public Health, which affirms the right of developing countries to use to the full the provisions in the Agreement on Trade Related Aspects of Intellectual Property Rights regarding flexibilities to protect public health, and, in particular, provide access to medicines for all",
            figures: ["immunization-dpt-children"]
        },
        {
            title: "Substantially increase health financing and the recruitment, development, training and retention of the health workforce in developing countries, especially in least developed countries and small island developing States"
        },
        {
            title: "Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks"
        }
    ]
}

// Goal 4
const QualityEducation: Goal = {
    slug: "quality-education",
    name: "Quality Education",
    title: "Ensure inclusive and quality education for all and promote lifelong learning",
    description: `Obtaining a quality education is the foundation to improving people’s lives and sustainable development. Major progress has been made towards increasing access to education at all levels and increasing enrolment rates in schools particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals. For example, the world has achieved equality in primary education between girls and boys, but few countries have achieved that target at all levels of education.`,
    targets: [
        {
            // 4.1
            title: "By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and Goal-4 effective learning outcomes",
            figures: [
                "existence-of-nationally-representative-learning-assessment-at-the-end-of-primary-education",
                "students-in-grade-2-who-cant-read-a-single-word-ca-2015",
                "existence-of-nationally-representative-learning-assessment-at-the-end-of-primary-education",
                "share-of-students-at-end-of-primary-education-achieving-minimum-maths-proficiency-2010-2015"
            ]
        },
        {
            title: "By 2030, ensure that all girls and boys have access to quality early childhood development, care and preprimary education so that they are ready for primary education"
        },
        {
            title: "By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university"
        },
        {
            title: "By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship"
        },
        {
            title: "By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations"
        },
        {
            // 4.6
            title: "By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy",
            figures: [
                "youth-literacy-males",
                "youth-literacy-female",
                "adult-literacy-male",
                "adult-literacy-female"
            ]
        },
        {
            title: "By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development"
        },
        {
            title: "Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, nonviolent, inclusive and effective learning environments for all"
        },
        {
            title: "By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries"
        },
        {
            title: "By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing states"
        }
    ]
}

// Goal 5
const GenderEquality: Goal = {
    slug: "gender-equality",
    name: "Gender Equality",
    title: "Achieve gender equality and empower all women and girls",
    description: `Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world. Providing women and girls with equal access to education, health care, decent work, and representation in political and economic decision-making processes will fuel sustainable economies and benefit societies and humanity at large.`,
    targets: [
        {
            // 5.1
            title: "End all forms of discrimination against all women and girls everywhere",
            figureDesc: `The following visualisations present global-level data on the legal basis of nondiscrimation and gender equality across various measures, including hiring, equal pay, marital rape and property rights, among others. Also shown below is the long-term global progression of universal suffrage — an important indicator of gender equality.`,
            figures: [
                "universal-suffrage-granted-to-women",
                "law-mandate-nondiscrimination-hiring",
                "law-mandate-equal-pay",
                "does-legislation-explicitly-criminalise-marital-rape",
                "gender-rights-to-property",
                "women-required-to-obey-husband",
                "does-law-mandate-paid-or-unpaid-maternity-leave",
                "nondiscrimination-clause-gender",
                "testimony-weight-gender"
            ]
        },
        {
            // 5.2
            title: "Eliminate all forms of violence against all women and girls in the public and private spheres, including trafficking and sexual and other types of exploitation",
            figureDesc: `
                The first visualization presents data on the share of ever-partnered women and girls aged 15 or older who reported being victim to some form of violence by a current or former partner within the previous year. As shown as a time-series [accessed by clicking the "Chart" tab or any country on the map], data coverage is highly incomplete and infrequent when viewed over time. Recent data for many countries is not currently available — for example, the latest data reference for India dates back to 2006.

                or a select number of countries, data is available on the percentage of young girls (ages 15 to 19 years old) who report having been victims of sexual abuse. This data is presented in the chart to the right; as shown, such data is also infrequently collected with a wide range of reference years
            `,
            figures: ["women-subjected-to-violence-last-year", "percentage-of-girls-15-to-19-who-report-having-been-victims-of-sexual-abuse"]
        },
        {
            // 5.3
            title: "Eliminate all harmful practices, such as child, early and forced marriage and female genital mutilation",
            figureDesc: `
                The map below presents coverage of the percentage of women (aged between 20 and 24) who report being married or in a union before the age of 18. This metric for some countries is typically more consistently measured/estimated providing a useful time-series trend. However for some countries, measurement is still a key issue; data for India and Brazil, for example, has not been recorded within the last decade.
            `,
            figures: ["women-married-by-age-18", "female-genital-mutilation"]
        },
        {
            title: "Recognize and value unpaid care and domestic work through the provision of public services, infrastructure and social protection policies and the promotion of shared responsibility within the household and the family as nationally appropriate"
        },
        {
            // 5.5
            title: "Ensure women’s full and effective participation and equal opportunities for leadership at all levels of decisionmaking in political, economic and public life",
            figureDesc: `
                The series of charts below present data on political participation and management positions held by women at various levels. Data coverage on political participation is typically complete and up-to-date for nearly all countries, however, data on female management is less well-covered.
            `,
            figures: [
                "countries-that-have-ever-elected-a-woman-to-parliament",
                "seats-held-by-women-in-national-parliaments?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL",
                "proportion-of-women-in-ministerial-positions",
                "share-firms-top-female-manager?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL",
                "female-employment-in-management"
            ]
        },
        {
            // 5.6
            title: "Ensure universal access to sexual and reproductive health and reproductive rights as agreed in accordance with the Programme of Action of the International Conference on Population and Development and the Beijing Platform for Action and the outcome documents of their review conferences",
            figureDesc: `
                This chart shows the percentage of interviewed, married women aged 15-49 who report making their own informed decisions on healthcare-related issues. As is the case with many gender-related metrics, data for many countries is infrequently reported and often insufficient to develop trends over time.
            `,
            figures: ["proportion-of-women-who-make-their-own-informed-health-care-decisions"]
        },
        {
            title: "Undertake reforms to give women equal rights to economic resources, as well as access to ownership and control over land and other forms of property, financial services, inheritance and natural resources, in accordance with national laws"
        },
        {
            title: "Enhance the use of enabling technology, in particular information and communications technology, to promote the empowerment of women"
        },
        {
            title: "Adopt and strengthen sound policies and enforceable legislation for the promotion of gender equality and the empowerment of all women and girls at all levels"
        }
    ]    
}

// Goal 6
const WaterAndSanitation: Goal = {
    slug: "water-and-sanitation",
    name: "Clean Water and Sanitation",
    title: "Ensure access to water and sanitation for all",
    description: `Clean, accessible water for all is an essential part of the world we want to live in. There is sufficient fresh water on the planet to achieve this. But due to bad economics or poor infrastructure, every year millions of people, most of them children, die from diseases associated with inadequate water supply, sanitation and hygiene.`,
    targets: [
        {
            // 6.1
            title: "By 2030, achieve universal and equitable access to safe and affordable drinking water for all",
            figures: ["share-of-the-population-with-access-to-improved-drinking-water?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL", "number-without-access-water-source"]
        },
        {
            // 6.2
            title: "By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations",
            figures: ["share-of-population-with-improved-sanitation-faciltities", "number-without-access-sanitation", "people-practicing-open-defecation-of-population?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        },
        { 
            title: "By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally" 
        }, 
        {
            // 6.4
            title: "By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity" ,
            figures: ["freshwater-withdrawals-as-a-share-of-internal-resources?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        }, 
        { 
            title: "By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate" 
        }, 
        { 
            title: "By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes" 
        }, 
        { 
            title: "By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies" 
        }, 
        { 
             title: "Support and strengthen the participation of local communities in improving water and sanitation management" 
        }
    ]    
}

// Goal 7
const Energy: Goal = {
    slug: "energy",
    name: "Affordable and Clean Energy",
    title: "Ensure access to affordable, reliable, sustainable and modern energy for all",
    description: `Energy is central to nearly every major challenge and opportunity the world faces today. Be it for jobs, security, climate change, food production or increasing incomes, access to energy for all is essential. Sustainable energy is opportunity – it transforms lives, economies and the planet.`,
    targets: [
        {
            // 7.1
            title: "By 2030, ensure universal access to affordable, reliable and modern energy services",
            figures: ["number-of-people-in-the-world-with-and-without-electricity-access", "access-to-clean-fuels-and-technologies-for-cooking?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        },
        {
            // 7.2
            title: "By 2030, increase substantially the share of renewable energy in the global energy mix",
            figures: ["renewables-share-final-energy?tab=chart", "world-electricity-by-source?country=OWID_WRL"]
        },
        {
            // 7.3
            title: "By 2030, double the global rate of improvement in energy efficiency",
            figures: ["energy-intensity-of-economies?country=OWID_WRL+South%20Asia+IND+BGD+NPL+PAK"]
        },
        {
            title: "By 2030, enhance international cooperation to facilitate access to clean energy research and technology, including renewable energy, energy efficiency and advanced and cleaner fossil-fuel technology, and promote investment in energy infrastructure and clean energy technology"
        },
        {
            title: "By 2030, expand infrastructure and upgrade technology for supplying modern and sustainable energy services for all in developing countries, in particular least developed countries, small island developing States, and land-locked developing countries, in accordance with their respective programmes of support"
        }
    ]
}

// Goal 8
const EconomicGrowth: Goal = {
    slug: "economic-growth",
    name: "Decent Work and Economic Growth",
    title: "Promote inclusive and sustainable economic growth, employment and decent work for all",
    description: `Roughly half the world’s population still lives on the equivalent of about US$2 a day. And in too many places, having a job doesn’t guarantee the ability to escape from poverty. This slow and uneven progress requires us to rethink and retool our economic and social policies aimed at eradicating poverty.`,
    targets: [
        {
            // 8.1
            title: "Sustain per capita economic growth in accordance with national circumstances and, in particular, at least 7 per cent gross domestic product growth per annum in the least developed countries",
            figures: ["gdp-per-capita-growth?tab=chart"]
        },
        {
            title: "Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labour-intensive sectors"
        },
        {
            title: "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sized enterprises, including through access to financial services"
        },
        {
            title: "Improve progressively, through 2030, global resource efficiency in consumption and production and endeavour to decouple economic growth from environmental degradation, in accordance with the 10-year framework of programmes on sustainable consumption and production, with developed countries taking the lead"
        },
        {
            // 8.5
            title: "By 2030, achieve full and productive employment and decent work for all women and men, including for young people and persons with disabilities, and equal pay for work of equal value",
            figures: ["average-hourly-earnings", "hourly-earnings-male-vs-female", "unemployment-rate", "unemployment-rate-of-males-vs-females"]
        },
        {
            // 8.6
            title: "By 2020, substantially reduce the proportion of youth not in employment, education or training",
            figures: ["youth-not-in-education-employment-training"]
        },
        {
            // 8.7
            title: "Take immediate and effective measures to eradicate forced labour, end modern slavery and human trafficking and secure the prohibition and elimination of the worst forms of child labour, including recruitment and use of child soldiers, and by 2025 end child labour in all its forms",
            figures: ["incidence-of-child-labour?tab=map&amp;year=2015&amp;country=BGD+IND+NPL+PAK", "average-working-hours-of-children"]
        },
        {
            title: "Protect labour rights and promote safe and secure working environments for all workers, including migrant workers, in particular women migrants, and those in precarious employment"
        },
        {
            title: "By 2030, devise and implement policies to promote sustainable tourism that creates jobs and promotes local culture and products"
        },
        {
            title: "Strengthen the capacity of domestic financial institutions to encourage and expand access to banking, insurance and financial services for all"
        },
        {
            // 8.10
            title: "Increase Aid for Trade support for developing countries, in particular least developed countries, including through the Enhanced Integrated Framework for Trade-Related Technical Assistance to Least Developed Countries",
            figures: ["number-of-commercial-bank-branches-per-100000-adults", "automated-teller-machines-atms-per-100000-adults"]
        },
        {
            title: "By 2020, develop and operationalize a global strategy for youth employment and implement the Global Jobs Pact of the International Labour Organization"
        }
    ]
}

// Goal 9
const InfrastructureIndustrialization: Goal = {
    slug: "infrastructure-industrialization",
    name: "Industry, Innovation and Infrastructure",
    title: "Build resilient infrastructure, promote sustainable industrialization and foster innovation",
    description: `Investments in infrastructure – transport, irrigation, energy and information and communication technology – are crucial to achieving sustainable development and empowering communities in many countries. It has long been recognized that growth in productivity and incomes, and improvements in health and education outcomes require investment in infrastructure.`,
    targets: [
        {
            title: "Develop quality, reliable, sustainable and resilient infrastructure, including regional and transborder infrastructure, to support economic development and human well-being, with a focus on affordable and equitable access for all"
        },
        {
            // 9.2
            title: "Promote inclusive and sustainable industrialization and, by 2030, significantly raise industry’s share of employment and gross domestic product, in line with national circumstances, and double its share in least developed countries",
            figures: ["manufacturing-value-added-to-gdp", "industry-share-of-total-emplyoment"]
        },
        {
            title: "Increase the access of small-scale industrial and other enterprises, in particular in developing countries, to financial services, including affordable credit, and their integration into value chains and markets"
        },
        {
            // 9.4
            title: "By 2030, upgrade infrastructure and retrofit industries to make them sustainable, with increased resource-use efficiency and greater adoption of clean and environmentally sound technologies and industrial processes, with all countries taking action in accordance with their respective capabilities",
            figures: ["carbon-emission-intensity-of-economies?country=OWID_WRL+South%20Asia+IND+PAK+BGD+NPL"]
        },
        {
            // 9.5
            title: "Enhance scientific research, upgrade the technological capabilities of industrial sectors in all countries, in particular developing countries, including, by 2030, encouraging innovation and substantially increasing the number of research and development workers per 1 million people and public and private research and development spending",
            figures: ["research-and-development-expenditure-of-gdp", "researchers-in-rd-per-million-people?year=2015"]
        },
        {
            title: "Facilitate sustainable and resilient infrastructure development in developing countries through enhanced financial, technological and technical support to African countries, least developed countries, landlocked developing countries and small island developing States 18"
        },
        {
            title: "Support domestic technology development, research and innovation in developing countries, including by ensuring a conducive policy environment for, inter alia, industrial diversification and value addition to commodities"
        },
        {
            title: "Significantly increase access to information and communications technology and strive to provide universal and affordable access to the Internet in least developed countries by 2020"
        }
    ]
}

// Goal 10
const Inequality: Goal = {
    slug: "inequality",
    name: "Reduced Inequalities",
    title: "Reduce inequality within and among countries",
    description: `The international community has made significant strides towards lifting people out of poverty.  The most vulnerable nations – the least developed countries, the landlocked developing countries and the small island developing states – continue to make inroads into poverty reduction.  However, inequality still persists and large disparities remain in access to health and education services and other assets.`,
    targets: [
        {
            // 10.1
            title: "By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average",
            figures: ["annualized-average-growth-rate-in-per-capita-real-survey-mean-consumption-or-income-bottom-40-of-population"]
        },
        {
            title: "By 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status"
        },
        {
            title: "Ensure equal opportunity and reduce inequalities of outcome, including by eliminating discriminatory laws, policies and practices and promoting appropriate legislation, policies and action in this regard"
        },
        {
            title: "Adopt policies, especially fiscal, wage and social protection policies, and progressively achieve greater equality"
        },
        {
            title: "Improve the regulation and monitoring of global financial markets and institutions and strengthen the implementation of such regulations"
        },
        {
            title: "Ensure enhanced representation and voice for developing countries in decision-making in global international economic and financial institutions in order to deliver more effective, credible, accountable and legitimate institutions"
        },
        {
            title: "Facilitate orderly, safe, regular and responsible migration and mobility of people, including through the implementation of planned and well-managed migration policies"
        },
        {
            title: "Implement the principle of special and differential treatment for developing countries, in particular least developed countries, in accordance with World Trade Organization agreements"
        },
        {
            title: "Encourage official development assistance and financial flows, including foreign direct investment, to States where the need is greatest, in particular least developed countries, African countries, small island developing States and landlocked developing countries, in accordance with their national plans and programmes"
        },
        {
            title: "By 2030, reduce to less than 3 per cent the transaction costs of migrant remittances and eliminate remittance corridors with costs higher than 5 per cent"
        }
    ]
}

// Goal 11
const Cities: Goal = {
    slug: "cities",
    name: "Sustainable Cities and Communities",
    title: "Make cities inclusive, safe, resilient and sustainable",
    description: `The challenges cities face can be overcome in ways that allow them to continue to thrive and grow, while improving resource use and reducing pollution and poverty. The future we want includes cities of opportunities for all, with access to basic services, energy, housing, transportation and more.`,
    targets: [
        {
            // 11.1
            title: "By 2030, ensure access for all to adequate, safe and affordable housing and basic services and upgrade slums",
            figures: ["share-of-urban-population-living-in-slums?country=BGD+IND+NPL+PAK+South%20Asia"]
        },
        {
            title: "By 2030, provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons"
        },
        {
            title: "By 2030, enhance inclusive and sustainable urbanization and capacity for participatory, integrated and sustainable human settlement planning and management in all countries"
        },
        {
            title: "Strengthen efforts to protect and safeguard the world’s cultural and natural heritage"
        },
        {
            // 11.5
            title: "By 2030, significantly reduce the number of deaths and the number of people affected and substantially decrease the direct economic losses relative to global gross domestic product caused by disasters, including water-related disasters, with a focus on protecting the poor and people in vulnerable situations",
            figures: ["death-rates-from-disasters?tab=chart"]
        },
        {
            // 11.6
            title: "By 2030, reduce the adverse per capita environmental impact of cities, including by paying special attention to air quality and municipal and other waste management",
            figures: ["PM25-air-pollution?country=BGD+IND+NPL+PAK+South%20Asia+OWID_WRL"]
        },
        {
            title: "By 2030, provide universal access to safe, inclusive and accessible, green and public spaces, in particular for women and children, older persons and persons with disabilities"
        },
        {
            title: "Support positive economic, social and environmental links between urban, peri-urban and rural areas by strengthening national and regional development planning"
        },
        {
            title: "By 2020, substantially increase the number of cities and human settlements adopting and implementing integrated policies and plans towards inclusion, resource efficiency, mitigation and adaptation to climate change, resilience to disasters, and develop and implement, in line with the Sendai Framework for Disaster Risk Reduction 2015-2030, holistic disaster risk management at all levels"
        },
        {
            title: "Support least developed countries, including through financial and technical assistance, in building sustainable and resilient buildings utilizing local materials"
        }
    ]
}

// Goal 12
const SustainableConsumptionProduction: Goal = {
    slug: "sustainable-consumption-production",
    name: "Responsible Consumption and Production",
    title: "Ensure sustainable consumption and production patterns",
    description: `Sustainable consumption and production is about promoting resource and energy efficiency, sustainable infrastructure, and providing access to basic services, green and decent jobs and a better quality of life for all. Its implementation helps to achieve overall development plans, reduce future economic, environmental and social costs, strengthen economic competitiveness and reduce poverty.`,
    targets: [
        {
            title: "Implement the 10-year framework of programmes on sustainable consumption and production, all countries taking action, with developed countries taking the lead, taking into account the development and capabilities of developing countries"
        },
        {
            title: "By 2030, achieve the sustainable management and efficient use of natural resources"
        },
        {
            title: "By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses"
        },
        {
            title: "By 2020, achieve the environmentally sound management of chemicals and all wastes throughout their life cycle, in accordance with agreed international frameworks, and significantly reduce their release to air, water and soil in order to minimize their adverse impacts on human health and the environment"
        },
        {
            title: "By 2030, substantially reduce waste generation through prevention, reduction, recycling and reuse"
        },
        {
            title: "Encourage companies, especially large and transnational companies, to adopt sustainable practices and to integrate sustainability information into their reporting cycle"
        },
        {
            title: "Promote public procurement practices that are sustainable, in accordance with national policies and priorities"
        },
        {
            title: "By 2030, ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature"
        },
        {
            title: "Support developing countries to strengthen their scientific and technological capacity to move towards more sustainable patterns of consumption and production"
        },
        {
            title: "Develop and implement tools to monitor sustainable development impacts for sustainable tourism that creates jobs and promotes local culture and products"
        },
        {
            title: "Rationalize inefficient fossil-fuel subsidies that encourage wasteful consumption by removing market distortions, in accordance with national circumstances, including by restructuring taxation and phasing out those harmful subsidies, where they exist, to reflect their environmental impacts, taking fully into account the specific needs and conditions of developing countries and minimizing the possible adverse impacts on their development in a manner that protects the poor and the affected communities"
        }
    ]
}

// Goal 13
const ClimateChange: Goal = {
    slug: "climate-change",
    name: "Climate Action",
    title: "Take urgent action to combat climate change and its impacts",
    description: `Affordable, scalable solutions are now available to enable countries to leapfrog to cleaner, more resilient economies. The pace of change is quickening as more people are turning to renewable energy and a range of other measures that will reduce emissions and increase adaptation efforts.`,
    targets: [
        {
            // 13.1
            title: "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters in all countries",
            figures: ["death-rates-from-disasters?tab=chart"]
        },
        {
            // 13.2
            title: "Integrate climate change measures into national policies, strategies and planning",
            figures: ["number-of-parties-env-agreements", "co-emissions-per-capita?tab=chart&amp;country=IND+PAK+BGD+NPL", "carbon-emission-intensity-of-economies?country=OWID_WRL+South%20Asia+IND+PAK+BGD+NPL"]
        },
        {
            title: "Improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning"
        },
        {
            title: "Implement the commitment undertaken by developed-country parties to the United Nations Framework Convention on Climate Change to a goal of mobilizing jointly $100 billion annually by 2020 from all sources to address the needs of developing countries in the context of meaningful mitigation actions and transparency on implementation and fully operationalize the Green Climate Fund through its capitalization as soon as possible"
        },
        {
            title: "Promote mechanisms for raising capacity for effective climate change-related planning and management in least developed countries and small island developing States, including focusing on women, youth and local and marginalized communities"
        }
    ]    
}

// Goal 14
const Oceans: Goal = {
    slug: "oceans",
    name: "Life below Water",
    title: "Conserve and sustainably use the oceans, seas and marine resources",
    description: `Our rainwater, drinking water, weather, climate, coastlines, much of our food, and even the oxygen in the air we breathe, are all ultimately provided and regulated by the sea. Throughout history, oceans and seas have been vital conduits for trade and transportation. Careful management of this essential global resource is a key feature of a sustainable future.`,
    targets: [
        {
            title: "By 2025, prevent and significantly reduce marine pollution of all kinds, in particular from land-based activities, including marine debris and nutrient pollution"
        },
        {
            title: "By 2020, sustainably manage and protect marine and coastal ecosystems to avoid significant adverse impacts, including by strengthening their resilience, and take action for their restoration in order to achieve healthy and productive oceans"
        },
        {
            title: "Minimize and address the impacts of ocean acidification, including through enhanced scientific cooperation at all levels"
        },
        {
            title: "By 2020, effectively regulate harvesting and end overfishing, illegal, unreported and unregulated fishing and destructive fishing practices and implement science-based management plans, in order to restore fish stocks in the shortest time feasible, at least to levels that can produce maximum sustainable yield as determined by their biological characteristics"
        },
        {
            // 14.5
            title: "By 2020, conserve at least 10 per cent of coastal and marine areas, consistent with national and international law and based on the best available scientific information",
            figures: ["marine-protected-areas"]
        },
        {
            title: "By 2020, prohibit certain forms of fisheries subsidies which contribute to overcapacity and overfishing, eliminate subsidies that contribute to illegal, unreported and unregulated fishing and refrain from introducing new such subsidies, recognizing that appropriate and effective special and differential treatment for developing and least developed countries should be an integral part of the World Trade Organization fisheries subsidies negotiation"
        },
        {
            title: "By 2030, increase the economic benefits to Small Island developing States and least developed countries from the sustainable use of marine resources, including through sustainable management of fisheries, aquaculture and tourism"
        },
        {
            title: "Increase scientific knowledge, develop research capacity and transfer marine technology, taking into account the Intergovernmental Oceanographic Commission Criteria and Guidelines on the Transfer of Marine Technology, in order to improve ocean health and to enhance the contribution of marine biodiversity to the development of developing countries, in particular small island developing States and least developed countries"
        },
        {
            title: "Provide access for small-scale artisanal fishers to marine resources and markets"
        },
        {
            title: "Enhance the conservation and sustainable use of oceans and their resources by implementing international law as reflected in UNCLOS, which provides the legal framework for the conservation and sustainable use of oceans and their resources, as recalled in paragraph 158 of The Future We Want"
        }
    ]
}

// Goal 15
const Biodiversity: Goal = {
    slug: "biodiversity",
    name: "Life on Land",
    title: "Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss",
    description: `Forests cover 30 per cent of the Earth’s surface and in addition to providing food security and shelter, forests are key to combating climate change, protecting biodiversity and the homes of the indigenous population.  Thirteen million hectares of forests are being lost every year while the persistent degradation of drylands has led to the desertification of 3.6 billion hectares.`,
    targets: [
        {
            // 15.1
            title: "By 2020, ensure the conservation, restoration and sustainable use of terrestrial and inland freshwater ecosystems and their services, in particular forests, wetlands, mountains and drylands, in line with obligations under international agreements",
            figures: ["forest-area-as-share-of-land-area?map", "terrestrial-protected-areas"]
        },
        {
            title: "By 2020, promote the implementation of sustainable management of all types of forests, halt deforestation, restore degraded forests and substantially increase afforestation and reforestation globally"
        },
        {
            title: "By 2030, combat desertification, restore degraded land and soil, including land affected by desertification, drought and floods, and strive to achieve a land degradation-neutral world"
        },
        {
            title: "By 2030, ensure the conservation of mountain ecosystems, including their biodiversity, in order to enhance their capacity to provide benefits that are essential for sustainable development"
        },
        {
            title: "Take urgent and significant action to reduce the degradation of natural habitats, halt the loss of biodiversity and, by 2020, protect and prevent the extinction of threatened species"
        },
        {
            title: "Promote fair and equitable sharing of the benefits arising from the utilization of genetic resources and promote appropriate access to such resources, as internationally agreed"
        },
        {
            title: "Take urgent action to end poaching and trafficking of protected species of flora and fauna and address both demand and supply of illegal wildlife products"
        },
        {
            title: "By 2020, introduce measures to prevent the introduction and significantly reduce the impact of invasive alien species on land and water ecosystems and control or eradicate the priority species"
        },
        {
            title: "By 2020, integrate ecosystem and biodiversity values into national and local planning, development processes, poverty reduction strategies and accounts"
        },
        {
            title: "Mobilize and significantly increase financial resources from all sources to conserve and sustainably use biodiversity and ecosystems"
        },
        {
            title: "Mobilize significant resources from all sources and at all levels to finance sustainable forest management and provide adequate incentives to developing countries to advance such management, including for conservation and reforestation"
        },
        {
            title: "Enhance global support for efforts to combat poaching and trafficking of protected species, including by increasing the capacity of local communities to pursue sustainable livelihood opportunities"
        }
    ]
}

// Goal 16
const PeaceJustice: Goal = {
    slug: "peace-justice",
    name: "Peace, Justice and Strong Institutions",
    title: "Promote just, peaceful and inclusive societies",
    description: `Goal 16 of the Sustainable Development Goals is dedicated to the promotion of peaceful and inclusive societies for sustainable development, the provision of access to justice for all, and building effective, accountable institutions at all levels.`,
    targets: [
        {
            // 16.1
            title: "Significantly reduce all forms of violence and related death rates everywhere",
            figures: ["intentional-homicides-per-100000-people", "deaths-conflict-terrorism-per-100000?tab=chart"]
        },
        {
            // 16.2
            title: "End abuse, exploitation, trafficking and all forms of violence against and torture of children",
            figures: ["percentage-of-children-214-who-experience-violent-discipline-at-home?tab=map", "percentage-of-girls-15-to-19-who-report-having-been-victims-of-sexual-abuse"]
        },
        {
            title: "Promote the rule of law at the national and international levels and ensure equal access to justice for all"
        },
        {
            title: "By 2030, significantly reduce illicit financial and arms flows, strengthen the recovery and return of stolen assets and combat all forms of organized crime"
        },
        {
            title: "Substantially reduce corruption and bribery in all their forms"
        },
        {
            title: "Develop effective, accountable and transparent institutions at all levels"
        },
        {
            title: "Ensure responsive, inclusive, participatory and representative decision-making at all levels"
        },
        {
            title: "Broaden and strengthen the participation of developing countries in the institutions of global governance"
        },
        {
            title: "By 2030, provide legal identity for all, including birth registration"
        },
        {
            title: "Ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements"
        },
        {
            title: "Strengthen relevant national institutions, including through international cooperation, for building capacity at all levels, in particular in developing countries, to prevent violence and combat terrorism and crime"
        },
        {
            title: "Promote and enforce non-discriminatory laws and policies for sustainable development"
        }
    ]
}

// Goal 17
const GlobalPartnerships: Goal = {
    slug: "global-partnerships",
    name: "Partnerships for the Goals",
    title: "Revitalize the global partnership for sustainable development",
    description: `A successful sustainable development agenda requires partnerships between governments, the private sector and civil society. These inclusive partnerships built upon principles and values, a shared vision, and shared goals that place people and the planet at the centre, are needed at the global, regional, national and local level.`,
    targets: [
        {
            // 17.1
            title: "Strengthen domestic resource mobilization, including through international support to developing countries, to improve domestic capacity for tax and other revenue collection",
            figures: ["total-government-revenue-of-gdp", "proportion-of-domestic-budget-funded-by-domestic-taxes-of-gdp"]
        },
        {
            title: "Developed countries to implement fully their official development assistance commitments, including the commitment by many developed countries to achieve the target of 0.7 per cent of ODA/GNI to developing countries and 0.15 to 0.20 per cent of ODA/GNI to least developed countries ODA providers are encouraged to consider setting a target to provide at least 0.20 per cent of ODA/GNI to least developed countries"
        },
        {
            title: "Mobilize additional financial resources for developing countries from multiple sources"
        },
        {
            title: "Assist developing countries in attaining long-term debt sustainability through coordinated policies aimed at fostering debt financing, debt relief and debt restructuring, as appropriate, and address the external debt of highly indebted poor countries to reduce debt distress"
        },
        {
            title: "Adopt and implement investment promotion regimes for least developed countries"
        },
        {
            // 17.6
            title: "Enhance North-South, South-South and triangular regional and international cooperation on and access to science, technology and innovation and enhance knowledge sharing on mutually agreed terms, including through improved coordination among existing mechanisms, in particular at the United Nations level, and through a global technology facilitation mechanism",
            figures: ["fixed-broadband-subscriptions-per-100-people?tab=chart"]
        },
        {
            title: "Promote the development, transfer, dissemination and diffusion of environmentally sound technologies to developing countries on favourable terms, including on concessional and preferential terms, as mutually agreed"
        },
        {
            // 17.8
            title: "Fully operationalize the technology bank and science, technology and innovation capacity-building mechanism for least developed countries by 2017 and enhance the use of enabling technology, in particular information and communications technology",
            figures: ["share-of-individuals-using-the-internet?map"]
        },
        {
            // 17.9
            title: "Enhance international support for implementing effective and targeted capacity-building in developing countries to support national plans to implement all the sustainable development goals, including through North-South, South-South and triangular cooperation",
            figures: ["completeness-of-birth-registration?tab=map"]
        },
        {
            title: "Promote a universal, rules-based, open, non-discriminatory and equitable multilateral trading system under the World Trade Organization, including through the conclusion of negotiations under its Doha Development Agenda"
        },
        {
            title: "Significantly increase the exports of developing countries, in particular with a view to doubling the least developed countries’ share of global exports by 2020"
        },
        {
            title: "Realize timely implementation of duty-free and quota-free market access on a lasting basis for all least developed countries, consistent with World Trade Organization decisions, including by ensuring that preferential rules of origin applicable to imports from least developed countries are transparent and simple, and contribute to facilitating market access"
        },
        {
            title: "Enhance global macroeconomic stability, including through policy coordination and policy coherence"
        },
        {
            title: "Enhance policy coherence for sustainable development"
        },
        {
            title: "Respect each country’s policy space and leadership to establish and implement policies for poverty eradication and sustainable development"
        },
        {
            title: "Enhance the global partnership for sustainable development, complemented by multi-stakeholder partnerships that mobilize and share knowledge, expertise, technology and financial resources, to support the achievement of the sustainable development goals in all countries, in particular developing countries"
        },
        {
            title: "Encourage and promote effective public, public-private and civil society partnerships, building on the experience and resourcing strategies of partnerships"
        },
        {
            title: "By 2020, enhance capacity-building support to developing countries, including for least developed countries and small island developing States, to increase significantly the availability of high-quality, timely and reliable data disaggregated by income, gender, age, race, ethnicity, migratory status, disability, geographic location and other characteristics relevant in national contexts"
        },
        {
            title: "By 2030, build on existing initiatives to develop measurements of progress on sustainable development that complement gross domestic product, and support statistical capacity-building in developing countries"
        }
    ]
}

export const Goals: Goal[] = [
    NoPoverty,
    ZeroHunger,
    GoodHealth,
    QualityEducation,
    GenderEquality,
    WaterAndSanitation,
    Energy,
    EconomicGrowth,
    InfrastructureIndustrialization,
    Inequality,
    Cities,
    SustainableConsumptionProduction,
    ClimateChange,
    Oceans,
    Biodiversity,
    PeaceJustice,
    GlobalPartnerships
]
