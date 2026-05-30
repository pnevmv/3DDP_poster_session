import Figure2 from '../imports/Figure2.png';
import Figure3 from '../imports/Figure3.png';
import Figure4 from '../imports/Figure4.png';
import Figure5 from '../imports/Figure5.png';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      {/* A0 Landscape Poster Container - 1189mm × 841mm = wider than tall */}
      <div className="w-full aspect-[1189/841] bg-white">

        {/* Header */}
        <header className="mb-6 pb-4 border-b-4 border-[#d97706]">
          <h1 className="text-5xl mb-2 text-[#d97706]" style={{ fontWeight: 700 }}>
            FoundationStereo: Zero-Shot Stereo Matching
          </h1>
          <div className="text-base text-gray-700 mb-1">
            <strong>Based on:</strong> Bowen Wen, Matthew Trepte, Joseph Aribido, Jan Kautz, Orazio Gallo, Stan Birchfield — NVIDIA
          </div>
          <div className="text-base text-gray-700">
            <strong>Presented by:</strong> Danil Smirnov, Federico Cognolatto • 3D Data Processing Poster Session • University of Padova, 2026
          </div>
        </header>

        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Column 1: Motivation + Contributions */}
          <div className="space-y-4">
            <section className="bg-gray-50 p-5 rounded-lg">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                Motivation
              </h2>
              <div className="text-base leading-relaxed space-y-2">
                <p>
                  Many deep stereo matching models still rely on <strong>per-domain fine-tuning</strong> to achieve competitive performance.
                </p>
                <div className="ml-3 space-y-1 text-sm">
                  <div className="flex items-start">
                    <span className="text-[#d97706] mr-2">•</span>
                    <span><strong>Sim-to-real gap:</strong> Synthetic training fails on real scenes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#d97706] mr-2">•</span>
                    <span><strong>Challenging structures:</strong> Reflections, textureless, thin objects</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-[#d97706] mr-2">•</span>
                    <span><strong>Weak zero-shot:</strong> Poor generalization to unseen domains</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 p-5 rounded-lg">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                Key Contributions
              </h2>
              <div className="text-base leading-relaxed space-y-2">
                <div className="flex items-start">
                  <span className="bg-[#d97706] text-white px-2 py-0.5 rounded mr-2 text-sm" style={{ fontWeight: 600 }}>1</span>
                  <span className="text-sm"><strong>FoundationStereo:</strong> Stereo foundation model with strong zero-shot generalization</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#d97706] text-white px-2 py-0.5 rounded mr-2 text-sm" style={{ fontWeight: 600 }}>2</span>
                  <span className="text-sm"><strong>FSD Dataset:</strong> 1M synthetic stereo pairs with high diversity</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#d97706] text-white px-2 py-0.5 rounded mr-2 text-sm" style={{ fontWeight: 600 }}>3</span>
                  <span className="text-sm"><strong>Side-Tuning Adapter:</strong> Adapts DepthAnythingV2 for stereo</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-[#d97706] text-white px-2 py-0.5 rounded mr-2 text-sm" style={{ fontWeight: 600 }}>4</span>
                  <span className="text-sm"><strong>Attentive Hybrid Cost Filtering:</strong> Local + global reasoning</span>
                </div>
              </div>
            </section>
          </div>

          {/* Column 2: Architecture Overview */}
          <div>
            <section className="bg-gray-50 p-5 rounded-lg h-full">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                Architecture Overview
              </h2>
              <div className="h-[280px] rounded mb-3 bg-white flex items-center justify-center p-2">
                <img src={Figure2} alt="Figure 2: FoundationStereo Architecture" className="max-h-full w-full object-contain" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-[#d97706] text-white p-2 rounded text-center">
                  <div className="text-xs" style={{ fontWeight: 600 }}>Step 1</div>
                  <div className="text-[10px] mt-0.5">Feature Extraction</div>
                </div>
                <div className="bg-[#d97706] text-white p-2 rounded text-center">
                  <div className="text-xs" style={{ fontWeight: 600 }}>Step 2</div>
                  <div className="text-[10px] mt-0.5">Hybrid Cost Volume</div>
                </div>
                <div className="bg-[#d97706] text-white p-2 rounded text-center">
                  <div className="text-xs" style={{ fontWeight: 600 }}>Step 3</div>
                  <div className="text-[10px] mt-0.5">Cost Filtering</div>
                </div>
                <div className="bg-[#d97706] text-white p-2 rounded text-center">
                  <div className="text-xs" style={{ fontWeight: 600 }}>Step 4</div>
                  <div className="text-[10px] mt-0.5">GRU Refinement</div>
                </div>
              </div>
            </section>
          </div>

          {/* Column 3: Key Ideas */}
          <div>
            <section className="bg-gray-50 p-5 rounded-lg h-full">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                Key Ideas
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-[#d97706] pl-3">
                  <h3 className="text-base mb-1" style={{ fontWeight: 600 }}>Side-Tuning Adapter (STA)</h3>
                  <p className="text-sm leading-relaxed">
                    Adapts monocular depth features from <strong>DepthAnythingV2</strong> for stereo matching through lightweight adapters.
                  </p>
                </div>

                <div className="border-l-4 border-[#d97706] pl-3">
                  <h3 className="text-base mb-1" style={{ fontWeight: 600 }}>Attentive Hybrid Cost Filtering</h3>
                  <ul className="ml-3 space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#d97706] mr-1.5">→</span>
                      <span><strong>Axial-Planar Conv:</strong> Efficient spatial + disparity cost-volume filtering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#d97706] mr-1.5">→</span>
                      <span><strong>Disparity Transformer:</strong> Long-range reasoning over disparity space</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 h-[140px] rounded bg-white flex items-center justify-center p-2">
                <img src={Figure3} alt="Figure 3: STA & AHCF Details" className="max-h-full w-full object-contain" />
              </div>
            </section>
          </div>

        </div>

        {/* Row 2: 3 Columns */}
        <div className="grid grid-cols-3 gap-6 mb-6">

          {/* Column 1: Dataset */}
          <div>
            <section className="bg-gray-50 p-5 rounded-lg h-full">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                FSD Dataset
              </h2>
              <div className="text-sm leading-relaxed space-y-2">
                <p>
                  <strong>1 million stereo pairs</strong> via NVIDIA Omniverse with high realism.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="text-xl text-[#d97706]" style={{ fontWeight: 700 }}>1280×720</div>
                    <div className="text-xs">Resolution</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="text-xl text-[#d97706]" style={{ fontWeight: 700 }}>1M</div>
                    <div className="text-xs">Pairs</div>
                  </div>
                </div>
                <p className="text-xs">
                  <strong>Scenes:</strong> Indoor, outdoor, driving, flying<br/>
                  <strong>Diversity:</strong> Baselines, intrinsics, lighting<br/>
                  <strong>Self-curation:</strong> Removes ambiguous synthetic stereo pairs
                </p>
              </div>
              <div className="mt-3 h-[100px] rounded bg-white flex items-center justify-center p-2">
                <img src={Figure4} alt="Figure 4: Dataset & Self-Curation" className="max-h-full w-full object-contain" />
              </div>
            </section>
          </div>

          {/* Column 2: Results */}
          <div>
            <section className="bg-gray-50 p-5 rounded-lg h-full">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                Zero-Shot Results
              </h2>
              <p className="text-sm mb-3">
                <strong>State-of-the-art zero-shot performance</strong> without target-domain fine-tuning.
              </p>

              <div className="bg-white rounded-lg overflow-hidden border-2 border-[#d97706]">
                <table className="w-full text-sm">
                  <thead className="bg-[#d97706] text-white">
                    <tr>
                      <th className="px-3 py-2 text-left">Dataset</th>
                      <th className="px-3 py-2 text-center">Metric ↓</th>
                      <th className="px-3 py-2 text-center">FoundationStereo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2">Middlebury</td>
                      <td className="px-3 py-2 text-center">BP-2</td>
                      <td className="px-3 py-2 text-center" style={{ fontWeight: 700 }}>1.1</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="px-3 py-2">ETH3D</td>
                      <td className="px-3 py-2 text-center">BP-1</td>
                      <td className="px-3 py-2 text-center" style={{ fontWeight: 700 }}>0.5</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-3 py-2">KITTI-12</td>
                      <td className="px-3 py-2 text-center">D1</td>
                      <td className="px-3 py-2 text-center" style={{ fontWeight: 700 }}>2.3</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-2">KITTI-15</td>
                      <td className="px-3 py-2 text-center">D1</td>
                      <td className="px-3 py-2 text-center" style={{ fontWeight: 700 }}>2.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3 bg-[#fef3c7] p-3 rounded border-l-4 border-[#d97706]">
                <p className="text-xs">
                  Lower is better. Values are error rates (%).
                </p>
              </div>
            </section>
          </div>

          {/* Column 3: Qualitative */}
          <div>
            <section className="bg-gray-50 p-5 rounded-lg h-full">
              <h2 className="text-2xl mb-3 text-[#d97706]" style={{ fontWeight: 600 }}>
                In-the-Wild Results
              </h2>
              <div className="h-[180px] rounded bg-white flex items-center justify-center p-2">
                <img src={Figure5} alt="Figure 5: Qualitative Comparison vs. SOTA Methods" className="max-h-full w-full object-contain" />
              </div>
              <p className="text-sm mt-3 leading-relaxed">
                Sharp, detailed disparity maps with accurate boundaries. Better handling of reflections, thin structures, and textureless regions.
              </p>
            </section>
          </div>

        </div>

        {/* Footer: Takeaways + Limitations */}
        <footer className="bg-[#d97706] text-white p-[16px] m-[0px] rounded-[10px]">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg mb-1.5" style={{ fontWeight: 600 }}>Key Takeaways</h2>
              <div className="text-xs space-y-0.5">
                <div>✓ <strong>Foundation model paradigm</strong> works for stereo</div>
                <div>✓ <strong>Large-scale synthetic data</strong> + monocular priors enable zero-shot transfer</div>
                <div>✓ <strong>Hybrid reasoning</strong> crucial for robust cost volumes</div>
              </div>
            </div>
            <div>
              <h2 className="text-lg mb-1.5" style={{ fontWeight: 600 }}>Limitations</h2>
              <div className="text-xs space-y-0.5">
                <div>• <strong>Efficiency:</strong> Transformer modules need optimization for real-time</div>
                <div>• <strong>Transparent objects:</strong> Limited glass/water diversity in training</div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}