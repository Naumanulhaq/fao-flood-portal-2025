const FLOOD_DATA = {
    national: {
        totalFloodedArea: 17304,
        totalFloodedAgriculturalArea: 14498,
        agriAreaPercent: 7.3,
        totalPopulationExposed: 11350000,
        ruralPopulationExposed: 6000000,
        totalProvincialArea: 447328,
        totalDistricts: 102,
        districtsByProvince: { kp: 36, punjab: 37, sindh: 29 },
        peakToOctoberReduction: 33, // 17,304 to 11,635
        peakArea: 17304,
        octoberArea: 11635
    },
    provinces: {
        kp: {
            name: "Khyber Pakhtunkhwa",
            floodExtent: 412,
            totalArea: 100897,
            floodPercent: 0.4,
            agriTotalArea: 18512,
            agriFloodedArea: 330,
            agriFloodPercent: 1.8,
            popExposed: 344000,
            popRuralExposed: 120251,
            popTotal: 39742000,
            octoberArea: 352,
            octoberAgriArea: 275,
            crops: {
                rice: 22,
                sugarcane: 32,
                maize: 1,
                others: 275
            },
            topDistricts: {
                extent: [
                    { name: "Dera Ismail Khan", value: 113, percent: 1.3 },
                    { name: "Kohat", value: 73, percent: 2.1 },
                    { name: "Swabi", value: 34, percent: 2.3 },
                    { name: "Lakki Marwat", value: 34, percent: 1.0 },
                    { name: "Mansehra", value: 27, percent: 0.7 }
                ],
                agri: [
                    { name: "Dera Ismail Khan", value: 87, percent: 1.8 },
                    { name: "Kohat", value: 66, percent: 7.9 },
                    { name: "Swabi", value: 33, percent: 3.9 },
                    { name: "Lakki Marwat", value: 28, percent: 1.4 },
                    { name: "Mansehra", value: 23, percent: 9.4 }
                ],
                pop: [
                    { name: "Swabi", value: 49785, percent: 3.1 },
                    { name: "Mansehra", value: 45506, percent: 3.0 },
                    { name: "Kohat", value: 41999, percent: 4.1 },
                    { name: "Mardan", value: 37315, percent: 1.6 },
                    { name: "Dera Ismail Khan", value: 33312, percent: 2.4 }
                ]
            }
        },
        punjab: {
            name: "Punjab",
            floodExtent: 12940,
            totalArea: 205403,
            floodPercent: 6.3,
            agriTotalArea: 126858,
            agriFloodedArea: 11251,
            agriFloodPercent: 8.9,
            popExposed: 9274000,
            popRuralExposed: 4820729,
            popTotal: 109994289,
            octoberArea: 8811,
            octoberAgriArea: 7560,
            crops: {
                rice: 2144,
                cotton: 1228,
                sugarcane: 341,
                others: 7537
            },
            topDistricts: {
                extent: [
                    { name: "Bahawalpur", value: 1025, percent: 4.3 },
                    { name: "Bhakkar", value: 719, percent: 8.5 },
                    { name: "Sialkot", value: 701, percent: 22.8 },
                    { name: "Mianwali", value: 594, percent: 10.0 },
                    { name: "Khanewal", value: 563, percent: 12.9 }
                ],
                agri: [
                    { name: "Bahawalpur", value: 829, percent: 13.3 },
                    { name: "Bhakkar", value: 685, percent: 17.3 },
                    { name: "Sialkot", value: 661, percent: 25.1 },
                    { name: "Khanewal", value: 520, percent: 13.6 },
                    { name: "Mianwali", value: 490, percent: 14.5 }
                ],
                pop: [
                    { name: "Sialkot", value: 924635, percent: 22.7 },
                    { name: "Faisalabad", value: 513646, percent: 6.3 },
                    { name: "Bahawalpur", value: 484590, percent: 13.3 },
                    { name: "Khanewal", value: 452322, percent: 14.7 },
                    { name: "Gujrat", value: 432645, percent: 14.0 }
                ]
            }
        },
        sindh: {
            name: "Sindh",
            floodExtent: 3952,
            totalArea: 141028,
            floodPercent: 2.8,
            agriTotalArea: 52893,
            agriFloodedArea: 2917,
            agriFloodPercent: 5.5,
            popExposed: 1732000,
            popRuralExposed: 1077119,
            popTotal: 43278627,
            octoberArea: 2472,
            octoberAgriArea: 1720,
            crops: {
                rice: 793,
                cotton: 79,
                sugarcane: 30,
                others: 2016
            },
            topDistricts: {
                extent: [
                    { name: "Dadu", value: 542, percent: 6.8 },
                    { name: "Larkana", value: 505, percent: 26.3 },
                    { name: "Khairpur", value: 491, percent: 3.1 },
                    { name: "Kambar Shahdad Kot", value: 405, percent: 7.2 },
                    { name: "Naushahro Feroze", value: 396, percent: 13.0 }
                ],
                agri: [
                    { name: "Dadu", value: 477, percent: 13.9 },
                    { name: "Larkana", value: 401, percent: 30.4 },
                    { name: "Khairpur", value: 361, percent: 12.3 },
                    { name: "Kambar Shahdad Kot", value: 328, percent: 12.0 },
                    { name: "Naushahro Feroze", value: 304, percent: 13.9 }
                ],
                pop: [
                    { name: "Larkana", value: 362002, percent: 12.1 },
                    { name: "Dadu", value: 232131, percent: 5.6 },
                    { name: "Khairpur", value: 206841, percent: 3.3 },
                    { name: "Kambar Shahdad Kot", value: 200692, percent: 6.2 },
                    { name: "Naushahro Feroze", value: 125063, percent: 2.4 }
                ]
            }
        }
    },
    cropsCombined: {
        rice: 2959,
        cotton: 1307,
        sugarcane: 403,
        maize: 0.6
    }
};
