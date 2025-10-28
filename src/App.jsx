import React from "react";
import {
  ArrowRight,
  User,
  Stethoscope,
  FlaskConical,
  FileText,
  Hospital,
  Microscope,
  Pill,
  CheckCircle,
} from "lucide-react";
export default function NesidioblastoseFlowchart() {
  const Section = ({ isTop = false, icon: Icon, title, color, children, number }) => (
    <div
      className="bg-white rounded-lg shadow-lg border-2 p-3 h-full flex flex-col"
      style={{ borderColor: color, width: "280px", height: isTop ? "270px" : "336px" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h3 className="font-bold text-sm mb-2" style={{ color }}>
        {title}
      </h3>
      <div className="flex-1 text-xs"> {children} </div>
    </div>
  );
  const Arrow = () => (
    <div className="flex items-center justify-center px-2">
      <ArrowRight className="w-8 h-8 text-[#f46b16]" strokeWidth={3} />
    </div>
  );
  return (
    <div className="bg-[#f6f6e9] p-y-4">
      <div className="mb-4 text-center">
        {/* <h1 className="text-2xl font-bold text-indigo-700">Nesidioblastose Pós-Derivação Gástrica (NIPHS)</h1> */}
        <p className="text-sm text-[#f46b16]">Paciente Feminina, 45 anos - Bypass Gástrico em Y-de-Roux há 18 meses</p>
      </div>
      <div className="w-full flex gap-3 flex-col items-center flex-1">
        <div className="flex flex-row gap-3 items-center">
          <Section icon={Stethoscope} title="INÍCIO DOS SINTOMAS" color="#f59e0b" number="1" isTop={true}>
            <div className="space-y-2">
              <p className="font-semibold text-orange-700">Episódios recorrentes:</p>
              <ul className="ml-3 space-y-1">
                <li>• Tontura</li> <li>• Sudorese</li> <li>• Confusão mental</li>
              </ul>
              <div className="mt-2 pt-2 border-t border-orange-200">
                <p
                  className="font-medium text-orange-600
"
                >
                  ⏱ 60–120 min após refeições
                </p>
              </div>
            </div>
          </Section>
          <Arrow />
          <Section icon={FlaskConical} title="AVALIAÇÃO LABORATORIAL" color="#10b981" number="2" isTop={true}>
            <div className="space-y-2">
              <p className="font-semibold text-emerald-700 mb-1">Durante hipoglicemia:</p>
              <div className="space-y-1">
                <div className="bg-red-50 p-1.5 rounded">
                  <span className="font-medium">Glicemia:</span> 38 mg/dL
                </div>
                <div className="bg-yellow-50 p-1.5 rounded">
                  <span className="font-medium">Insulina:</span> 22 µU/mL
                </div>
                <div className="bg-yellow-50 p-1.5 rounded">
                  <span className="font-medium">Peptídeo C:</span> 3,1 ng/mL
                </div>
                <div className="bg-green-50 p-1.5 rounded">
                  <span className="font-medium">Sulfonilureias:</span> Negativa
                </div>
              </div>
              <div className="mt-2 bg-emerald-100 p-1.5 rounded">
                <p className="font-bold text-emerald-800 text-center text-xs">
                  Hipoglicemia hiperinsulinêmica endógena
                </p>
              </div>
            </div>
          </Section>
          <Arrow />
          <Section icon={FileText} title="TESTES FUNCIONAIS" color="#8b5cf6" number="3" isTop={true}>
            <div className="space-y-2">
              <div className="bg-purple-50 p-2 rounded">
                <p className="font-semibold">Jejum 72h:</p> <p className="text-red-600 font-medium">Negativo</p>
                <p className="text-gray-600">→ Insulinoma descartado</p>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <p className="font-semibold">MMTT:</p>
                <p className="text-orange-600 font-medium">Positivo aos 90 min</p>
                <p className="text-gray-600">Glicemia: 35–38 mg/dL</p>
                <p className="text-gray-600">→ Insulina inapropriadamente elevada</p>
              </div>
            </div>
          </Section>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Section icon={Hospital} title="EXAMES DE IMAGEM" color="#06b6d4" number="4">
            <div className="space-y-1.5">
              <div className="border-b pb-1 border-[#22d3ee]">
                <p className="font-medium">TC abdome (17/12/24):</p>
                <p className="text-gray-600">Sem lesões pancreáticas</p>
              </div>
              <div className="border-b pb-1 border-[#22d3ee]">
                <p className="font-medium">RM/TC funcional:</p> <p className="text-gray-600">Sem foco insulinomatoso</p>
              </div>
              <div className="border-b pb-1 border-[#22d3ee]">
                <p className="font-medium">EDA (09/05/24):</p> <p className="text-gray-600">Anatomia normal</p>
              </div>
              <div className="border-b pb-1 border-[#22d3ee]">
                <p className="font-medium">Anatomopatológico:</p> <p className="text-gray-600">Gastrite + H. pylori</p>
              </div>
              <div>
                <p className="font-medium">TC crânio (15/01/25):</p> <p className="text-gray-600">Sem alterações</p>
              </div>
              <div className="mt-2 bg-cyan-100 p-1.5 rounded">
                <p className="font-bold text-cyan-800 text-center">Ausência de causa estrutural</p>
              </div>
            </div>
          </Section>
          <Arrow />
          <Section icon={Microscope} title="DIAGNÓSTICO HISTOLÓGICO" color="#ef4444" number="5">
            <div className="space-y-2">
              <div className="bg-red-50 p-2 rounded">
                <p className="font-semibold mb-1">Biópsia pancreática (15/02/25):</p>
                <ul className="ml-2 space-y-1">
                  <li>• Hiperplasia difusa de células β</li> <li>• Hipertrofia de ilhotas</li>
                </ul>
              </div>
              <div className="bg-red-600 text-white p-2 rounded text-center mt-2">
                <p className="font-bold">✅ DIAGNÓSTICO FINAL</p>
                <p className="text-sm font-bold mt-1">Nesidioblastose difusa (NIPHS)</p>
              </div>
            </div>
          </Section>
          <Arrow />
          <Section icon={Pill} title="TRATAMENTO E EVOLUÇÃO" color="#6366f1" number="6">
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-indigo-700 mb-1">Inicial:</p>
                <ul className="ml-2 space-y-0.5">
                  <li>• Dieta fracionada</li> <li>• Acarbose (parcial)</li> <li>• Octreotida (transitória)</li>
                </ul>
              </div>
              <div className="pt-2 border-t border-indigo-200">
                <p className="font-semibold text-indigo-700 mb-1">Cirúrgico:</p>
                <p className="bg-indigo-50 p-1.5 rounded">Pancreatectomia parcial ~30% (05/2025)</p>
              </div>
              <div className="pt-2 border-t border-indigo-200">
                <p className="font-semibold text-indigo-700 mb-1">Evolução:</p>
                <div className="space-y-0.5 ml-2">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> <span>Redução dos episódios</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-green-600" /> <span>Sem diabetes pós-op</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 rounded text-center">
                <p className="font-bold">✅ Evolução favorável</p>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <div className="mt-3 text-center text-xs text-[#f46b16]">
        Organigrama clínico - Caso de Nesidioblastose pós-derivação gástrica
      </div>
    </div>
  );
}
