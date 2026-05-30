import Figure2 from '../imports/Figure2.png';
import Figure3 from '../imports/Figure3.png';
import Figure4 from '../imports/Figure4.png';
import Figure5 from '../imports/Figure5.png';

const ORANGE = '#D97706';
const TEXT = '#1F2937';
const TEXT_SEC = '#4B5563';
const CARD_BG = '#F9FAFB';
const LIGHT_ORANGE = '#FFF4E6';
const RESULT_BG = '#ECFDF5';
const RESULT_TEXT = '#065F46';
const LABEL_COLOR = '#6B7280';

function FigLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: LABEL_COLOR, fontSize: 11, marginTop: 3 }}>{children}</p>
  );
}

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white p-4">
      {/* A0 Landscape Poster Container */}
      <div className="w-full aspect-[1189/841] bg-white" style={{ color: TEXT }}>

        {/* Header */}
        <header className="mb-4 pb-3 border-b-4" style={{ borderColor: ORANGE }}>
          <h1 className="text-5xl mb-1.5" style={{ fontWeight: 700, color: ORANGE }}>
            FoundationStereo: Zero-Shot Stereo Matching
          </h1>
          <div className="text-base mb-0.5" style={{ color: TEXT_SEC }}>
            <strong style={{ color: TEXT }}>Based on:</strong> Bowen Wen, Matthew Trepte, Joseph Aribido, Jan Kautz, Orazio Gallo, Stan Birchfield — NVIDIA
          </div>
          <div className="text-base" style={{ color: TEXT_SEC }}>
            <strong style={{ color: TEXT }}>Presented by:</strong> Danil Smirnov, Federico Cognolatto • 3D Data Processing Poster Session • University of Padova, 2026
          </div>
        </header>

        {/* Row 1: 3 Columns */}
        <div className="grid grid-cols-3 gap-6 mb-4">

          {/* Column 1: Motivation + Contributions */}
          <div className="space-y-3">
            <section className="p-5 rounded-xl" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2" style={{ fontWeight: 600, color: ORANGE }}>
                Motivation
              </h2>
              <div className="text-sm leading-relaxed space-y-1.5" style={{ color: TEXT }}>
                <p>
                  Many deep stereo matching models still rely on <strong>per-domain fine-tuning</strong> to achieve competitive performance.
                </p>
                <div className="ml-2 space-y-1">
                  <div className="flex items-start">
                    <span className="mr-2 mt-0.5" style={{ color: ORANGE }}>•</span>
                    <span><strong>Sim-to-real gap:</strong> Synthetic training fails on real scenes</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2 mt-0.5" style={{ color: ORANGE }}>•</span>
                    <span><strong>Challenging structures:</strong> Reflections, textureless, thin objects</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2 mt-0.5" style={{ color: ORANGE }}>•</span>
                    <span><strong>Weak zero-shot:</strong> Poor generalization to unseen domains</span>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-5 rounded-xl" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2" style={{ fontWeight: 600, color: ORANGE }}>
                Key Contributions
              </h2>
              <div className="text-sm leading-relaxed space-y-1.5" style={{ color: TEXT }}>
                {[
                  ['1', 'FoundationStereo:', 'Stereo foundation model with strong zero-shot generalization'],
                  ['2', 'FSD Dataset:', '1M synthetic stereo pairs with high diversity'],
                  ['3', 'Side-Tuning Adapter:', 'Adapts DepthAnythingV2 for stereo matching'],
                  ['4', 'Attentive Hybrid Cost Filtering:', 'Local + global reasoning'],
                ].map(([num, bold, rest]) => (
                  <div key={num} className="flex items-start">
                    <span
                      className="text-white text-xs px-1.5 py-0.5 rounded mr-2 flex-shrink-0"
                      style={{ background: ORANGE, fontWeight: 600 }}
                    >{num}</span>
                    <span><strong>{bold}</strong> {rest}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 2: Architecture Overview — visually dominant */}
          <div>
            <section className="p-4 rounded-xl h-full flex flex-col" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2 flex-shrink-0" style={{ fontWeight: 600, color: ORANGE }}>
                Architecture Overview
              </h2>

              {/* Figure 2 — enlarged ~30% vs original 280px */}
              <div className="rounded overflow-hidden mb-2 flex-1 bg-white flex items-center justify-center" style={{ minHeight: 0 }}>
                <img
                  src={Figure2}
                  alt="FoundationStereo architecture"
                  className="w-full h-full object-contain"
                />
              </div>
              <FigLabel>Figure 2: FoundationStereo architecture</FigLabel>

              {/* Step buttons — compact */}
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                {[
                  ['Step 1', 'Feature Extraction'],
                  ['Step 2', 'Hybrid Cost Volume'],
                  ['Step 3', 'Cost Filtering'],
                  ['Step 4', 'GRU Refinement'],
                ].map(([step, label]) => (
                  <div
                    key={step}
                    className="text-white text-center rounded py-1 px-1"
                    style={{ background: ORANGE }}
                  >
                    <div style={{ fontSize: 10, fontWeight: 700 }}>{step}</div>
                    <div style={{ fontSize: 9, marginTop: 1, color: 'rgba(255,255,255,0.9)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Column 3: Key Ideas */}
          <div>
            <section className="p-4 rounded-xl h-full flex flex-col" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2 flex-shrink-0" style={{ fontWeight: 600, color: ORANGE }}>
                Key Ideas
              </h2>
              <div className="space-y-2 text-sm" style={{ color: TEXT }}>
                <div className="border-l-4 pl-3" style={{ borderColor: ORANGE }}>
                  <h3 className="mb-0.5" style={{ fontWeight: 600 }}>Side-Tuning Adapter (STA)</h3>
                  <p className="text-xs leading-relaxed" style={{ color: TEXT_SEC }}>
                    Adapts monocular depth features from <strong style={{ color: TEXT }}>DepthAnythingV2</strong> for stereo matching through lightweight adapters.
                  </p>
                </div>
                <div className="border-l-4 pl-3" style={{ borderColor: ORANGE }}>
                  <h3 className="mb-0.5" style={{ fontWeight: 600 }}>Attentive Hybrid Cost Filtering</h3>
                  <ul className="ml-2 space-y-0.5 text-xs" style={{ color: TEXT_SEC }}>
                    <li className="flex items-start">
                      <span className="mr-1 flex-shrink-0" style={{ color: ORANGE }}>→</span>
                      <span><strong style={{ color: TEXT }}>Axial-Planar Conv:</strong> Efficient spatial + disparity cost-volume filtering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-1 flex-shrink-0" style={{ color: ORANGE }}>→</span>
                      <span><strong style={{ color: TEXT }}>Disparity Transformer:</strong> Long-range reasoning over disparity space</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Figure 3 — cropped to show only qualitative comparison (right portion) */}
              <div
                className="mt-2 rounded overflow-hidden flex-1"
                style={{ position: 'relative', minHeight: 100 }}
              >
                <img
                  src={Figure3}
                  alt="Effect of STA and AHCF"
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    height: '100%',
                    width: 'auto',
                  }}
                />
              </div>
              <FigLabel>Figure 3: Effect of STA and AHCF</FigLabel>
            </section>
          </div>

        </div>

        {/* Row 2: 3 Columns */}
        <div className="grid grid-cols-3 gap-6 mb-4">

          {/* Column 1: FSD Dataset */}
          <div>
            <section className="p-4 rounded-xl h-full flex flex-col" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2 flex-shrink-0" style={{ fontWeight: 600, color: ORANGE }}>
                FSD Dataset
              </h2>
              <div className="text-sm space-y-2" style={{ color: TEXT }}>
                <p>
                  <strong>1 million stereo pairs</strong> via NVIDIA Omniverse with high realism.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2 rounded-lg text-center">
                    <div className="text-lg" style={{ fontWeight: 700, color: ORANGE }}>1280×720</div>
                    <div className="text-xs" style={{ color: TEXT_SEC }}>Resolution</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-center">
                    <div className="text-lg" style={{ fontWeight: 700, color: ORANGE }}>1M</div>
                    <div className="text-xs" style={{ color: TEXT_SEC }}>Pairs</div>
                  </div>
                </div>
                <p className="text-xs" style={{ color: TEXT_SEC }}>
                  <strong style={{ color: TEXT }}>Scenes:</strong> Indoor, outdoor, driving, flying<br />
                  <strong style={{ color: TEXT }}>Diversity:</strong> Baselines, intrinsics, lighting<br />
                  <strong style={{ color: TEXT }}>Self-curation:</strong> Removes ambiguous synthetic pairs
                </p>
              </div>

              {/* Figure 4 — slightly enlarged */}
              <div className="mt-2 rounded overflow-hidden flex-1 bg-white flex items-center justify-center" style={{ minHeight: 120 }}>
                <img
                  src={Figure4}
                  alt="FSD dataset and self-curation"
                  className="max-h-full w-full object-contain"
                />
              </div>
              <FigLabel>Figure 4: FSD dataset and self-curation</FigLabel>
            </section>
          </div>

          {/* Column 2: Zero-Shot Results */}
          <div>
            <section className="p-4 rounded-xl h-full" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2" style={{ fontWeight: 600, color: ORANGE }}>
                Zero-Shot Results
              </h2>
              <p className="text-xs mb-3" style={{ color: TEXT_SEC }}>
                <strong style={{ color: TEXT }}>State-of-the-art zero-shot performance</strong> without target-domain fine-tuning.
              </p>

              <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: ORANGE }}>
                <table className="w-full text-sm">
                  <thead style={{ background: ORANGE }}>
                    <tr>
                      <th className="px-3 py-2.5 text-left text-white">Dataset</th>
                      <th className="px-3 py-2.5 text-center text-white">Metric ↓</th>
                      <th className="px-3 py-2.5 text-center text-white">FoundationStereo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Middlebury', 'BP-2', '1.1', 'white'],
                      ['ETH3D', 'BP-1', '0.5', CARD_BG],
                      ['KITTI-12', 'D1', '2.3', 'white'],
                      ['KITTI-15', 'D1', '2.8', CARD_BG],
                    ].map(([dataset, metric, value, rowBg]) => (
                      <tr key={dataset} style={{ background: rowBg, borderBottom: '1px solid #E5E7EB' }}>
                        <td className="px-3 py-2.5" style={{ color: TEXT }}>{dataset}</td>
                        <td className="px-3 py-2.5 text-center" style={{ color: TEXT_SEC }}>{metric}</td>
                        <td
                          className="px-3 py-2.5 text-center"
                          style={{ background: RESULT_BG, color: RESULT_TEXT, fontWeight: 700 }}
                        >{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-2 p-2 rounded-lg border-l-4" style={{ background: '#FFF4E6', borderColor: ORANGE }}>
                <p className="text-xs" style={{ color: TEXT_SEC }}>
                  Lower is better. Values are error rates (%).
                </p>
              </div>
            </section>
          </div>

          {/* Column 3: In-the-Wild Results */}
          <div>
            <section className="p-4 rounded-xl h-full flex flex-col" style={{ background: CARD_BG }}>
              <h2 className="text-xl mb-2 flex-shrink-0" style={{ fontWeight: 600, color: ORANGE }}>
                In-the-Wild Results
              </h2>

              {/* Figure 5 — enlarged ~20% */}
              <div className="rounded overflow-hidden flex-1 bg-white flex items-center justify-center" style={{ minHeight: 0 }}>
                <img
                  src={Figure5}
                  alt="In-the-wild qualitative comparison"
                  className="w-full h-full object-contain"
                />
              </div>
              <FigLabel>Figure 5: In-the-wild comparison</FigLabel>
              <p className="text-xs mt-1.5 leading-snug" style={{ color: TEXT_SEC }}>
                More complete disparity maps on reflective, textureless, repetitive, and thin-structure scenes.
              </p>
            </section>
          </div>

        </div>

        {/* Footer: Takeaways + Limitations — light orange, not heavy banner */}
        <footer className="p-5 rounded-xl" style={{ background: LIGHT_ORANGE }}>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-base mb-2" style={{ fontWeight: 700, color: ORANGE }}>Key Takeaways</h2>
              <div className="text-xs space-y-1" style={{ color: TEXT }}>
                <div>✓ <strong>Foundation model paradigm</strong> works for stereo matching</div>
                <div>✓ <strong>Large-scale synthetic data</strong> + monocular priors enable zero-shot transfer</div>
                <div>✓ <strong>Hybrid reasoning</strong> crucial for robust cost volumes</div>
              </div>
            </div>
            <div>
              <h2 className="text-base mb-2" style={{ fontWeight: 700, color: ORANGE }}>Limitations</h2>
              <div className="text-xs space-y-1" style={{ color: TEXT }}>
                <div>• <strong>Efficiency:</strong> Transformer modules need optimization for real-time use</div>
                <div>• <strong>Transparent objects:</strong> Limited glass/water diversity in training data</div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
