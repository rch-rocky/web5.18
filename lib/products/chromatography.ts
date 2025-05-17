// 色谱柱产品数据
export const chromatography = {
    id: "chromatography",
    title: "色谱柱",
    description: "提供高效液相色谱柱、气相色谱柱等多种色谱柱产品，满足各类分析检测需求。",
    longDescription:
      "色谱柱是色谱分析中的核心部件，用于分离和检测复杂混合物中的各组分。我们提供高效液相色谱柱（HPLC柱）、气相色谱柱（GC柱）等多种类型的色谱柱产品，具有高分离效率、高选择性和良好的耐用性，广泛应用于食品安全、环境监测、药物分析等领域。",
    image: "chromatography.jpg",
    subcategories: [
      {
        title: "森熹橙系列",
        products: [
          {
            id: "dfs-c18",
            categoryId: "chromatography",
            name: "DFS-C18",
            fullName: "SXDFS-C18色谱柱",
            description: "DFS-C18采用高度单分散多孔硅胶微球作为基质，其特点是高比表面积及有序可调的孔道结构，因此具有良好的峰形和重现性以及高度的稳定性等特性，可用于分离酸性、碱性、中性等物质。因采用双封尾工艺，故即使是碱性物质也能获得良好的峰型及分离度。",
            parameters: [
              "硅胶：高度单分散多孔硅胶（杂质含量小于10 ppm）",
              "孔径：110 Å, 180 Å",
              "粒径：3 μm, 5 μm",
              "比表面积：300 m²/g",
              "载碳量：16%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXDFS-C18", code: "SS01-FS16025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXDFS-C18", code: "SS01-FS16015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXDFS-C18", code: "SS01-FS16010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXDFS-C18", code: "SD01-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXDFS-C18", code: "SD01-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXDFS-C18", code: "SD01-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXDFS-C18", code: "SD01-0321010", spec: "2.1*100mm", lijin: "3µm" },
              { typeb:"SXDFS-C18", code: "SD01--0262110", spec: "2.1*100mm", lijin: "2.6µm" }
            ]
          },
          {
            id: "dpr-c18",
            categoryId: "chromatography",
            name: "DPR-C18",
            fullName: "SXDPR-C18色谱柱",
            description: "色谱柱SXDPR-C18适用于低pH条件，且由于未封尾，裸露的硅羟基数量更多，因此填料的极性更大，亲水性更强，适合极性与亲水性化合物的保留。加之采用高度单分散多孔硅胶微球为基质，进一步提升了色谱柱的比表面积，增加样品与键合相之间的反应，从而增加保留能力，提高分离度。",
            parameters: [
              "硅胶：高度单分散多孔硅胶（杂质含量小于10 ppm）",
              "孔径：110 Å",
              "粒径：3 μm, 5 μm",
              "比表面积：300 m²/g",
              "载碳量：14%",
              "pH范围：0.5-8.0"
            ],
            orderInfo: [
              { typeb:"SXDPR-C18", code: "SS02-FS16025", spec: "4.6*250mm", lijin: "5µm" }
            ]
          }
        ]
      },
      {
        title: "森熹红系列",
        products: [
          {
            id: "rd-c18",
            categoryId: "chromatography",
            name: "RD-C18",
            fullName: "SXRD-C18色谱柱",
            description: "SXRD-C18是一款普适性很广的色谱柱，具有优异的稳定性、独特的官能团键合及小分子封尾技术，均匀的涂层能够确保固定相具有高选择性的分离特点，加上独有的装柱工艺使其拥有稳定的基床从而具有更高的柱效及批次间的稳定性。适合分离酸性、中性和碱性化合物以及小分子多肽等。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：16%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-C18", code: "SX18-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0546015", spec: "4.6*200mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0546011", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0546009", spec: "4.6*50mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0346010", spec: "4.6*100mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0346007", spec: "4.6*75mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0540025", spec: "4.0*250mm", lijin: "5µm" },
              { typeb:"SXRD-C18", code: "SX18-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0321010", spec: "2.1*100mm", lijin: "3µm" },
              { typeb:"SXRD-C18", code: "SX18-0406025", spec: "4.6*250mm", lijin: "10µm" },
              { typeb:"SXRD-C18 (300A)", code: "SX181-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C18 (300A)", code: "SX181-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "aq-c18",
            categoryId: "chromatography",
            name: "AQ-C18",
            fullName: "SXAQ-C18色谱柱",
            description: "亲水性化合物和极性化合物在常规C18柱保留能力较弱，而水性柱专为亲水性和极性化合物具有更强保留能力和选择性而设计的。典型的应用是对生物分子、代谢物和药物降解产物，如有机酸、水溶性维生素、低聚糖、氨基酸及小分子缩氨酸等进行分离。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：12%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXAQ-C18", code: "SX20-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXAQ-C18", code: "SX20-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXAQ-C18", code: "SX20-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXAQ-C18", code: "SX20-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXAQ-C18", code: "SX20-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXAQ-C18", code: "SX20-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXAQ-C18", code: "SX20-0321010", spec: "2.1*100mm", lijin: "3µm" }
            ]
          },
          {
            id: "pr-c18",
            categoryId: "chromatography",
            name: "PR-C18",
            fullName: "SXPR-C18色谱柱",
            description: "SXPR-C18是中谱科技设计的一款高温和低pH（0.5-8）条件下使用的色谱柱，其采用的无封尾技术避免了因封尾试剂在酸性条件下容易水解的问题，从而使其选择性和重现性在酸性条件下能长时间保持不变。也因无封尾比AQ柱具有更强极性，非常适合分离极性化合物，对极性化合物有更强保留性。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：14%",
              "pH范围：0.5-8.0"
            ],
            orderInfo: [
              { typeb:"SXPR-C18", code: "SX19-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXPR-C18", code: "SX19-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXPR-C18", code: "SX19-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXPR-C18", code: "SX19-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXPR-C18", code: "SX19-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXPR-C18", code: "SX19-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXPR-C18", code: "SX19-0321010", spec: "2.1*100mm", lijin: "3µm" }
            ]
          },
          {
            id: "rd-c8",
            categoryId: "chromatography",
            name: "RD-C8",
            fullName: "SXRD-C8色谱柱",
            description: "该色谱柱分析酸或碱化合物时也可表现出较好峰型。同时在很宽的pH（2-9）内稳定性好，使用寿命长。相比之下它比C18的保留能力弱，对那些在C18相中保留能力太强化合物的分离更有用，当然也可以用于不需要太强保留能力的LC/MC上的分离。其比一般C18需要的时间更好。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：10%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-C8", code: "SX17-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C8", code: "SX17-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-C8", code: "SX17-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRD-C8", code: "SX17-0346025", spec: "4.6*250mm", lijin: "3.5µm" },
              { typeb:"SXRD-C8", code: "SX17-0346015", spec: "4.6*150mm", lijin: "3.5µm" },
              // Note: OCR shows "4.6*100mm 3.5μm" without a code, assuming it's a continuation or error, skipped.
              { typeb:"SXRD-C8", code: "SX17-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXRD-C8", code: "SX17-0321010", spec: "2.1*100mm", lijin: "3µm" },
              { typeb:"SXRD-C8", code: "SX17-0406025", spec: "4.6*250mm", lijin: "10µm" },
              { typeb:"SXRD-C8 (300A)", code: "SX171-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C8 (300A)", code: "SX171-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-c4",
            categoryId: "chromatography",
            name: "RD-C4",
            fullName: "SXRD-C4色谱柱",
            description: "SXRD-C4填料上键合有丁基基团，因此具有适中的疏水性能。该色谱柱具有优异的选择性和峰对称性，它对化合物有适中的保留，可用于酸性、中性和碱性有机化合物，如药物、多肽、有机酸等的分离。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：6%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-C4", code: "SX16-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C4", code: "SX16-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-C4", code: "SX16-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRD-C4 (300A)", code: "SX161-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-C4 (300A)", code: "SX161-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-c30",
            categoryId: "chromatography",
            name: "RD-C30",
            fullName: "SXRD-C30色谱柱",
            description: "C30烷基硅烷的供价修饰作用对超纯、球形、多孔硅胶色谱柱提供了高性状选择性，采用合理的小分子封尾技术，且两重封尾技术，能更好分离目标化合物，对长链化合物高分离度分离它们完全兼容各种水性缓冲液，可用于广泛的分析物应用，提供更加灵活的方法开发。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：18%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-C30", code: "SX12-0546025", spec: "4.6*250mm", lijin: "5µm" }, // Note: OCR uses SX12 for RD-C30
              { typeb:"SXRD-C30", code: "SX12-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-C30", code: "SX12-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXRD-C30", code: "SX12-0346015", spec: "4.6*150mm", lijin: "3µm" }
            ]
          },
          {
            id: "nh2",
            categoryId: "chromatography",
            name: "NH2",
            fullName: "SXNH2色谱柱",
            description: "中谱红Nh2固定相是以超纯全孔球形硅胶为基础，采用独特的氨基键合技术，增加了柱稳定性。其在正反相条件下均可使用。反相条件下一般为检测简单糖类样品，如果糖、葡萄糖、乳糖等，但一般不应用于多糖类样品分析。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：5 μm",
              "比表面积：300 m²/g",
              "载碳量：10%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-NH2", code: "SX15-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-NH2", code: "SX15-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXODS-NH2", code: "SX25-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXODS-NH2", code: "SX25-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-NH2-II", code: "SX12-0546025", spec: "4.6*250mm", lijin: "5µm" }, // Note: OCR uses SX12 for RD-NH2-II
              { typeb:"SXRD-NH2-II", code: "SX12-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "honey",
            categoryId: "chromatography",
            name: "蜂蜜柱",
            fullName: "SX蜂蜜柱",
            description: "蜂蜜色谱柱是可通用的，正、反相都可以使用。主要用于分析单糖、寡糖、糖醇、水溶性糖等，但也可以用于离子交换色谱法分析带负电荷的化合物。可以快速高效分离果糖、葡萄糖、乳糖、麦芽糖和低聚糖。进而，在室温条件下不需要用柱温箱进行加热就可以对葡萄糖进行分离，得到单峰。其pH范围2-9。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：120 Å",
              "粒径：5 μm",
              "比表面积：300 m²/g",
              "载碳量：12%",
              "pH范围：2.0-8.0"
            ],
            orderInfo: [
              { typeb:"SX蜂蜜柱", code: "SX612-0546025", spec: "4.6*250mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-sio2",
            categoryId: "chromatography",
            name: "RD-SiO2",
            fullName: "SXRD-SiO2色谱柱",
            description: "硅胶柱既可用于正相体系又可用于反相体系，通常用于正相体系、强极性化合物或异构体的分离，反相体系极少使用；所用流动相通常是正己烷和异丙醇体系相对较多。硅胶柱对构造异构化合物的分离具有特殊的选择性，常用于分离构造异构体化合物的分离，PH值在2-9。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：120 Å",
              "粒径：5 μm, 10 μm",
              "比表面积：300 m²/g",
              "pH范围：2.0-8.0"
            ],
            orderInfo: [
              { typeb:"SXRD-SiO2", code: "SX13-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-SiO2", code: "SX13-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-SiO2", code: "SX13-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRD-SiO2", code: "SX13-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXRD-SiO2", code: "SX13-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXRD-SiO2", code: "SX13-0346010", spec: "4.6*100mm", lijin: "3µm" }
            ]
          },
          {
            id: "phenyl",
            categoryId: "chromatography",
            name: "Phenyl",
            fullName: "SXPhenyl色谱柱",
            description: "采用独特的键合技术在硅胶上键合苯基而成的色谱柱。该色谱柱具有高的表面覆盖率和完全双封尾的特性，与直链烷烃键合而成的反相色谱柱相比，苯基柱具有不同的选择性，或者可以说是互补的选择性，对芳香族化合物、极性化合物和难以分离的药物具有优良的分离效果。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：10%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-Phenyl", code: "SX14-0546025", spec: "4.6*250mm", lijin: "5µm" }, // Corrected Pheny1 to Phenyl
              { typeb:"SXRD-Phenyl", code: "SX14-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl", code: "SX14-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl", code: "SX14-0540025", spec: "4.0*250mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl-Hexy", code: "SX63-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl-Hexy", code: "SX63-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl-Hexy", code: "SX63-0546010", spec: "4.6*100mm", lijin: "5µm" }
            ]
          },
          {
            id: "ods-h",
            categoryId: "chromatography",
            name: "ODS-H",
            fullName: "SXODS-H色谱柱",
            description: "ODS色谱柱采用聚合型键合高密度C18，并经过特色封尾技术处理。其对中药、食品中基质复杂化合物及化学药中杂质分离有比较明显改善，提高温度对选择性会更好。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：21%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXODS-H", code: "SX11-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXODS-H", code: "SX11-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXODS-H", code: "SX11-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXODS-H", code: "SX11-0346015", spec: "4.6*150mm", lijin: "3µm" }
            ]
          },
          {
            id: "rd-cn",
            categoryId: "chromatography",
            name: "RD-CN",
            fullName: "SXRD-CN色谱柱",
            description: "反相模式下对疏水分子洗脱快，对极性化合物具有独特选择性，在强碱性化合物分离项目中具有良好的峰型。pH范围（2-9）且与高比例水相具有良好的兼容性。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：8%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-CN", code: "SX05-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-CN", code: "SX05-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-CN", code: "SX05-0546010", spec: "4.6*100mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-pah",
            categoryId: "chromatography",
            name: "RD-PAH",
            fullName: "SXRD-PAH色谱柱",
            description: "PAH柱采用先进的多层键合方式，控制硅胶表面键合的反相C18的立体结构，使其对多环芳烃具有特异的选择性，能够对多种环芳烃的空间异构体实现基线分离。其具有优良的重现性，利于客户在测定时得到准确的分析结果。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：17%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-PAH", code: "SX26-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-PAH", code: "SX26-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "polo-rp",
            categoryId: "chromatography",
            name: "Polo-RP",
            fullName: "SXPolo-RP色谱柱",
            description: "Polo-RP是将氨基酰氯基团键合在硅胶表面的极性C18色谱柱，是比AQ柱耐相塌陷能力更强的水柱。尽管嵌入了极性基团，但固定相仍然保持反相特性。采用双封尾技术，进而可以得到极佳的对称峰型。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：11%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXPolo-RP-C18", code: "SX118-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXPolo-RP-C18", code: "SX118-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-phenyl-ether",
            categoryId: "chromatography",
            name: "RD-Phenyl-Ether",
            fullName: "SXRD-Phenyl-Ether色谱柱",
            description: "RD-Phenyl-Ether以极性乙醚连接苯基键合硅胶为固定相，适用于极性和芳香族化合物的分离，是麻黄碱的专用柱。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：90 Å, 120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：300 m²/g",
              "载碳量：11%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-Phenyl-Ether", code: "SX24-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-Phenyl-Ether", code: "SX24-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "rd-pfp",
            categoryId: "chromatography",
            name: "RD-PFP",
            fullName: "SXRD-PFP色谱柱",
            description: "SXRD-PFP（五氟代苯基）是中谱科技液相色谱柱家族新成员，其针对分离极性化合物过程中的保留时间和分离度问题而特别设计。用氟原子取代苯基柱上的五个氢原子，含氟固定相除了对含氟和含卤素的化合物有较高的选择性外，也可以作为普通的反相固定相进行使用，用于分离不含氟或氯的卤素化合物，提供与C-H烷基固定相不同的选择性。在生物制药、天然产物和环境分析中应用广泛。",
            details: "",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：5 μm",
              "比表面积：300 m²/g",
              "载碳量：10%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRD-PFP", code: "SX30-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRD-PFP", code: "SX30-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRD-PFP", code: "SX30-0546010", spec: "4.6*100mm", lijin: "5µm" }
            ]
          },
          {
            id: "ru-c18",
            categoryId: "chromatography",
            name: "RU-C18",
            fullName: "SXRU-C18色谱柱",
            description: "超高效液相色谱（UPLC）技术具有更广泛的线性速度、流速和耐压范围，可提高工作效率。更高的流速和通量能实现优异的分离度和灵敏度。UPLC可大幅缩短分析时间并降低每个样品的分析成本，同时提高决策结果的质量。UPLC的商品化，是分离科学和技术的巨大进步，液相色谱亦由此进入了全新的时代。中谱红RU-C18采用的1.8μm微球填料，基于我司的专利技术“新一代微流体技术”，进行了色谱微球的精准制造，保证硅胶微球具有高度均一性，其超高纯度全多孔球型硅胶（纯度大于99.999%）设计在低离子强度流动相条件下提高样品的载量和峰对称性，同时仍维持固有的机械与化学稳定性。",
            details: "",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量小于10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：1.8 μm",
              "比表面积：300 m²/g",
              "载碳量：16%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXRU-C18", code: "SX29-0182105", spec: "2.1*50mm", lijin: "1.8µm" },
              { typeb:"SXRU-C18", code: "SX29-0182110", spec: "2.1*100mm", lijin: "1.8µm" },
              { typeb:"SXRU-C18", code: "SX29-0182115", spec: "2.1*150mm", lijin: "1.8µm" },
              // SX29--0321010 2.1*100mm 3μm - This entry from OCR has a different particle size (3µm) than the RU-C18 product description (1.8µm).
              // It mightbe a different variant or product. For now, not adding it to this specific 1.8µm product.
            ]
          }, 
          {
            id: "mobile-phase-adsorption",
            categoryId: "chromatography",
            name: "流动相吸附柱",
            fullName: "SX流动相吸附柱",
            description: "液相色谱分析中，经常有一些莫名其妙的鬼峰干扰，特别是在梯度洗脱或者仪器使用很久时会出现，其中水比较容易夹带杂质，梯度洗脱时出现的几率更大。为了消除这些困扰已久的问题，中谱科技推出一款全新产品，流动相吸附柱，将他放置于泵和进样器之间，这样就可以吸附流动相中的杂质，从而确保做样的数据精准。",
            details: "",
            parameters: [
              "材质：特殊吸附填料",
              "规格：4.6×50 mm、4.6×75 mm、2.1×33 mm、2.1×50 mm（可选）",
              "耐压：最高15000 psi"
            ],
            orderInfo: [
              { typeb:"SX流动相吸附柱", code: "SX-46005", spec: "4.6*50mm", lijin: "" }, // No particle size in OCR
              { typeb:"SX流动相吸附柱", code: "SX-46007", spec: "4.6*75mm", lijin: "" },
              { typeb:"SX流动相吸附柱", code: "SX-21003", spec: "2.1*33mm", lijin: "" },
              { typeb:"SX流动相吸附柱", code: "SX-21005", spec: "2.1*50mm", lijin: "" }
            ]
          },
          {
            id: "preparative-column",
            categoryId: "chromatography",
            name: "制备柱",
            fullName: "SX制备柱",
            description: "森熹仪器努力做好分析柱的同时，致力于制备柱的研发。目前森熹仪器的制备柱已被众多的药物研发机构用于制备色谱分离纯化。在加大进样量的同时，能够保持良好的分离度和重现性，而且机械强度高，使用寿命长。既能够提高产率，又大大节省了溶剂，降低了使用成本，深受广大用户的好评。",
            details: "",
            parameters: [
              "填料类型：与RD-C18、AQ-C18等系列一致",
              "粒径：5 μm、10 μm",
              "规格：10×250 mm、21.2×250 mm、30×250 mm等",
              "耐压：高机械强度，适用于大规模纯化"
            ],
            orderInfo: [
              { typeb:"SXRD-C18(制备柱)", code: "SX08-0510025", spec: "10.0*250mm", lijin: "5µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-0510015", spec: "10.0*150mm", lijin: "5µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-0521225", spec: "21.2*250mm", lijin: "5µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-0521215", spec: "21.2*150mm", lijin: "5µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-1010025", spec: "10.0*250mm", lijin: "10µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-1010015", spec: "10.0*150mm", lijin: "10µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-1021225", spec: "21.2*250mm", lijin: "10µm" },
              { typeb:"SXRD-C18(制备柱)", code: "SX08-1021215", spec: "21.2*150mm", lijin: "10µm" }
            ]
          }
        ]
      },
      {
        title: "森熹蓝系列",
        products: [
          {
            id: "rx-c18",
            categoryId: "chromatography",
            name: "RX-C18",
            fullName: "SXRX-C18色谱柱",
            description: "RX-C18有机硅胶杂化基质，是在硅胶的硅氧烷网状构造中以更加稳定的烷基来取代在碱性条件下不稳定的硅氧桥连接，使其既具有硅胶类填料的良好分离性能和机械强度，又有聚合物填料的耐碱性。并通过特有的生产工艺三相键合，严格控制粒径分布和颗粒的表面形态，能更精确的控制表面修饰的均匀性，保证峰形对称性和分离重现性。",
            details: "",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：3 μm, 5 μm",
              "比表面积：300 m²/g",
              "载碳量：16%",
              "pH范围：1.0-12.0"
            ],
            orderInfo: [
              { typeb:"SXRX-C18 杂化", code: "SX40-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXRX-C18 杂化", code: "SX40-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXRX-C18 杂化", code: "SX40-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXRX-C18 杂化", code: "SX40-0346025", spec: "4.6*250mm", lijin: "3.5µm" }, // OCR shows 3.5µm for this line
              { typeb:"SXRX-C18 杂化", code: "SX40-0346015", spec: "4.6*150mm", lijin: "3.5µm" },
              // OCR shows "4.6*100mm 3.5μm" without a code, assuming it's a continuation or error, skipped.
              { typeb:"SXRX-C18 杂化", code: "SX40-0346025", spec: "4.6*250 mm", lijin: "3µm" }, // OCR has another SX40-0346025 with 3µm
              { typeb:"SXRX-C18 杂化", code: "SX40-0346015", spec: "4.6*150mm", lijin: "3µm" }, // OCR has another SX40-0346015 with 3µm
              { typeb:"SXRX-C18 杂化", code: "SX40-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXRX-C18 杂化", code: "SX40-0321010", spec: "2.1*100mm", lijin: "3µm" },
              { typeb:"SXRX-C18 杂化", code: "SXDZ40-0006015", spec: "2.1*150mm", lijin: "1.7um" }, // OCR typo "1.7um", should be µm
              { typeb:"SXRX-C18 杂化", code: "SXDZ40-0006010", spec: "2.1*100mm", lijin: "1.8um" }  // OCR typo "1.8um", should be µm
            ]
          },
          
          {
            id: "xy-c18",
            categoryId: "chromatography",
            name: "XY-C18",
            fullName: "SXXY-C18色谱柱",
            description: "C18填料在反相色谱柱中发挥极为重要的作用，它可以完成高效液相色谱70-80%的分析任务。由于C18是长键烷基键合相，较合理的载碳量和疏水性，对各种类型的生物大分子有更强的适应能力，因此在生物化学分析工作中的应用最为广泛，适用于氨基酸、小肽等生物分子的分析。采用独特的前处理技术处理填料，充分打开硅胶的硅醇基，使其在键合反应中能够更稳定。加上独特的双封尾技术，能够适应更多复杂的流动相成分（如缓冲盐、离子对试剂、较高比例的水相）而不让色谱柱寿命变短，使其具有更好的通用性。",
            details: "",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：3 μm, 5 μm",
              "比表面积：260 m²/g",
              "载碳量：13%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXXY-C18", code: "SX31-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXXY-C18", code: "SX31-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXXY-C18", code: "SX31-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXXY-C18", code: "SX31-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXXY-C18", code: "SX31-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXXY-C18", code: "SX31-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXXY-C18", code: "SX31-0321010", spec: "2.1*100mm", lijin: "3µm" }
            ]
          },
          {
            id: "xy-c8",
            categoryId: "chromatography",
            name: "XY-C8",
            fullName: "SXXY-C8色谱柱",
            description: "XY-C8适用于中等疏水性化合物，保留能力弱于C18，专为复杂基质样品设计。",
            details: "",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：3 μm, 5 μm",
              "比表面积：300 m²/g",
              "载碳量：10%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXXY-C8", code: "SX32-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXXY-C8", code: "SX32-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXXY-C8", code: "SX32-0546010", spec: "4.6*100mm", lijin: "5µm" }
            ]
          },
          {
            id: "xd-c18",
            categoryId: "chromatography",
            name: "XD-C18",
            fullName: "SXXD-C18色谱柱",
            description: "SXXD-C18采用的是高纯中性硅胶，不完全末端封尾，能有效的和水充分浸润，同时也兼顾非极性流动相的浸润，对于复杂化合物或杂质含量测定有比较好的分离。人参皂苷是三七、人参、红参等的活性成分，在普通C18上很难基线分离，其对流动相比较敏感。",
            details: "XD-C18采用高纯中性硅胶，未完全封尾，对复杂化合物（如人参皂苷）分离效果显著，兼容高水相流动相。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：260 m²/g",
              "载碳量：13%",
              "pH范围：2.0-9.0",
            ],
            orderInfo: [
              { typeb:"SXXD-C18", code: "SX33-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXXD-C18", code: "SX33-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXXD-C18", code: "SX33-0546010", spec: "4.6*100mm", lijin: "5µm" },
              { typeb:"SXXD-C18", code: "SX33-0346025", spec: "4.6*250mm", lijin: "3µm" },
              { typeb:"SXXD-C18", code: "SX33-0346015", spec: "4.6*150mm", lijin: "3µm" },
              { typeb:"SXXD-C18", code: "SX33-0321015", spec: "2.1*150mm", lijin: "3µm" },
              { typeb:"SXXD-C18", code: "SX33-0321010", spec: "2.1*100mm", lijin: "3µm" }
            ]
          },
          {
            id: "xr-c18",
            categoryId: "chromatography",
            name: "XR-C18",
            fullName: "SXXR-C18色谱柱",
            description: "XR-C18是森熹仪器研发的新一代色谱柱，该色谱柱通过锯齿键合固定相，并在pH1.0-12.5内表现良好的稳定性。",
            details: "XR-C18通过锯齿键合技术增强稳定性，耐pH 1-12.5，适用于极端条件分析。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "孔径：120 Å, 300 Å",
              "粒径：1.8 μm, 3 μm, 5 μm, 7 μm, 10 μm",
              "比表面积：260 m²/g",
              "载碳量：14%",
              "pH范围：1.0-12.5"
            ],
            orderInfo: [
              { typeb:"SXXR-C18", code: "SX37-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXXR-C18", code: "SX37-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXXR-C18", code: "SX37-0346025", spec: "4.6*250mm", lijin: "3.5µm" },
              { typeb:"SXXR-C18", code: "SX37-0346015", spec: "4.6*150mm", lijin: "3.5µm" },
              { typeb:"SXXR-C18", code: "SXDZ37-0006015", spec: "3.9*150mm", lijin: "5µm" } // Note: spec from OCR is 3.9*150mm
            ]
          },
          {
            id: "xy-sugar-ca",
            categoryId: "chromatography",
            name: "XY-Sugar-Ca",
            fullName: "SXXY-Sugar-Ca色谱柱",
            description: "SXXY-Sugar-Ca色谱柱是以低交联度、均匀粒径PS/DVB微球为基质的钙型强阳离子交换色谱柱，该色谱柱被广泛应用于糖类分析中。",
            details: "专为糖类分析设计，钙型强阳离子交换柱，用于蜂蜜、低聚糖分离，推荐流动相pH 5-9。",
            parameters: [
              "基质：单分散PS/DVB微球",
              "官能团：-SO₃Ca",
              "粒径：5 μm, 8 μm",
              "交联度：10%",
              "pH范围：5-9",
              "应用：糖类、甘露醇"
            ],
            orderInfo: [
              { typeb:"SXXY-Sugar-Ca", code: "SX35-0578030", spec: "7.8*300mm", lijin: "5µm" },
              { typeb:"SXXY-Sugar-Ca", code: "SX35-0878030", spec: "7.8*300mm", lijin: "8µm" }
            ]
          },
          {
            id: "xy-sugar-h",
            categoryId: "chromatography",
            name: "XY-Sugar-H",
            fullName: "SXXY-Sugar-H色谱柱",
            description: "XY-Sugar-H色谱柱是氢型阳离子交换柱(利巴韦林专用柱),其基质为低交联度、均匀粒径PS/DVB微球，该色谱柱广泛应用于有机酸和混合酸的分析。",
            details: "氢型阳离子交换柱，用于有机酸和混合酸分析（如利巴韦林），适用pH 1-3。",
            parameters: [
              "基质：单分散PS/DVB微球",
              "官能团：-SO₃H",
              "粒径：5 μm, 8 μm",
              "交联度：10%",
              "pH范围：1-3",
              "应用：有机酸、药物杂质"
            ],
            orderInfo: [
              { typeb:"SXXY-Sugar-H", code: "SX36-0578030", spec: "7.8*300mm", lijin: "5µm" },
              { typeb:"SXXY-Sugar-H", code: "SX36-0846030", spec: "7.8*300mm", lijin: "8µm" } // OCR code SX36-0846030, spec 7.8*300mm, lijin 8µm
            ]
          },
          {
            id: "scx",
            categoryId: "chromatography",
            name: "SCX",
            fullName: "SXSCX色谱柱",
            description: "SXSCX系列是在世界独创的高纯球形裸硅胶技术、国际先进的色谱键合工艺和严格的生产质量体系的基础上开发出的强阳离子交换色谱柱产品。以磺酸基为键合官能团，分为高载量（中谱蓝SCX）和低载量（中谱蓝300SCX）两种通用型色谱柱，适用于碱性化合物的分离。",
            details: "键合磺酸基，分为高载量（SCX）和低载量（300SCX），用于碱性化合物分离。",
            parameters: [
              "硅胶：高纯球形裸硅胶",
              "官能团：磺酸基",
              "粒径：5 μm",
              "pH范围：2-9",
              "应用：三聚氰胺、二甲双胍等"
            ],
            orderInfo: [
              { typeb:"SXSCX", code: "SX38-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXSCX", code: "SX38-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SX300SCX", code: "SX381-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SX300SCX", code: "SX381-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "sax",
            categoryId: "chromatography",
            name: "SAX",
            fullName: "SXSAX色谱柱",
            description: "SXSAX系列是在世界独创的高纯球形裸硅胶技术、国际先进的色谱键合工艺和严格的生产质量体系的基础上开发出的强阴离子交换色谱柱产品。以季铵为键合官能团，分为高载量（中谱蓝SAX）和低载量（中谱蓝300SAX）两种通用型色谱柱，适用于酸性化合物的分离。",
            details: "键合季铵基，用于酸性化合物分离，与SCX互补。",
            parameters: [
              "硅胶：高纯球形裸硅胶",
              "官能团：季铵基",
              "粒径：5 μm",
              "pH范围：2-9",
              "应用：有机酸、核苷酸"
            ],
            orderInfo: [
              { typeb:"SXSAX", code: "SX39-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXSAX", code: "SX39-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SX300SAX", code: "SX391-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SX300SAX", code: "SX391-0546015", spec: "4.6*150mm", lijin: "5µm" }
            ]
          },
          {
            id: "sec",
            categoryId: "chromatography",
            name: "SEC体积排阻柱",
            fullName: "SXSEC体积排阻柱",
            description: "SEC是基于体积排阻分离机理的高性能液相色谱分离柱。其分离填料采用超高机械强度、高孔容硅胶微球，结合独特的表面亲水化学修饰而成，具备良好的色谱分离性能，适用于水溶性分子例如多糖以及多肽、生物酶、抗体/蛋白等生物大分子物质的色谱分离。",
            details: "基于亲水修饰硅胶，按分子量分离生物大分子，提供多种孔径（120-1000 Å）。",
            parameters: [
              "基质：超纯硅胶",
              "修饰基团：亲水聚合物二醇基",
              "孔径：120 Å（SEC-120）、300 Å（SEC-300）、500 Å（SEC-500）", // SEC-1000 is also mentioned in OCR
              "粒径：5 μm",
              "应用：多糖、抗体、蛋白",
              "pH范围：2-8"
            ],
            orderInfo: [
              { typeb:"SXSEC150", code: "SX01-0578030", spec: "7.8*300mm", lijin: "5µm" }, // OCR uses SEC150, SEC300 etc.
              { typeb:"SXSEC300", code: "SX03-0578030", spec: "7.8*300mm", lijin: "5µm" },
              { typeb:"SXSEC500", code: "SX05-0578030", spec: "7.8*300mm", lijin: "5µm" },
              { typeb:"SXSEC1000", code: "SX10-0578030", spec: "7.8*300mm", lijin: "5µm" },
              { typeb:"SXSEC150", code: "SX15-0546030", spec: "4.6*300mm", lijin: "5µm" }, // OCR uses SX15 for SEC150 4.6*300
              { typeb:"SXSEC300", code: "SX03-0546030", spec: "4.6*300mm", lijin: "5µm" }, // OCR uses SX03 for SEC300 4.6*300
              { typeb:"SXSEC500", code: "SX05-0546030", spec: "4.6*300mm", lijin: "5µm" }, // OCR uses SX05 for SEC500 4.6*300
              { typeb:"SXSEC1000", code: "SX310-0546030", spec: "4.6*300mm", lijin: "5µm" },// OCR uses SX310 for SEC1000 4.6*300
              { typeb:"SXSEC150", code: "SX301-0546001", spec: "4.6*10mm", lijin: "5µm" },
              { typeb:"SXSEC300", code: "SX303-0546001", spec: "4.6*10mm", lijin: "5µm" },
              { typeb:"SXSEC500", code: "SX305-0546001", spec: "4.6*10mm", lijin: "5µm" },
              { typeb:"SXSEC1000", code: "SX310-0546001", spec: "4.6*10mm", lijin: "5µm" }
            ]
          },
      
          {
            id: "hilic-amide",
            categoryId: "chromatography",
            name: "HILIC-Amide",
            fullName: "SXHILIC-Amide色谱柱",
            description: "SXHILIC-Amide是一款特殊设计的丙基酰胺HILIC键合相。它具有独特的混合模式机理，对极性化合物和带负电荷的化合物具有良好的选择性。",
            details: "丙基酰胺键合相，亲水相互作用色谱（HILIC）模式，适用于极性化合物分离。",
            parameters: [
              "硅胶：高纯球形全多孔硅胶（杂质含量<10 ppm）",
              "官能团：丙基酰胺",
              "粒径：5 μm",
              "pH范围：2.0-9.0",
              "应用：糖类、水溶性维生素" // Added from original, was missing comma
            ],
            orderInfo: [ // Combined HILIC-Amide and HILIC entries from OCR
              { typeb:"SXHILIC-Amide", code: "SX68-0546025", spec: "4.6*250mm", lijin: "5µm" },
              { typeb:"SXHILIC-Amide", code: "SX68-0546015", spec: "4.6*150mm", lijin: "5µm" },
              { typeb:"SXHILIC", code: "SX37-0321015", spec: "2.1*150mm", lijin: "3µm" } // From page 5 of OCR
            ]
          }
        ]
      }
    ],
    features: [
      "高分离效率，提供清晰的色谱峰",
      "高选择性，能有效分离结构相似的化合物",
      "良好的批次重现性，确保分析结果可靠",
      "耐用性好，使用寿命长",
      "适用范围广，满足各类分析需求"
    ],
    applications: [
      "食品安全检测",
      "环境监测",
      "药物分析",
      "生物样品分析",
      "石油化工产品分析"
    ]
};