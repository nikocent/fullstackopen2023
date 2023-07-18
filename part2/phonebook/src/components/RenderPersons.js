const RenderSingle = ({name, number, id}) => 
  <p key={id}>{name} {number}</p>

const RenderAll = (list) =>
  <div>{list.map(item => RenderSingle(item))}</div>

export {RenderAll, RenderSingle}