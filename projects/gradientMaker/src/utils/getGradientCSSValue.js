export default function getGradientCSSValue(gradient){
  const gradientValues = gradient.colors.reduce((acc, obj, index) => acc + `${obj.value} ${obj.position}%${index + 1 !== gradient.colors.length ? "," : ""}`, "") // 3 paramètres : accumulateur, objet et index

  return `linear-gradient(${gradient.angle}deg,${gradientValues});`
}

// les fonction utilitaires se places généralement dans le dossier 'utils'