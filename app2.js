`<form>
<div class="grader">
  <input
    class="class-type"
    type="text"
    placeholder="class category"
    list="opt"
    value=${objectArray[i].class_name}
  /><!--  
   --><input
    class="class-number"
    type="text"
    placeholder="class number"
    value=${objectArray[i].class_number}
  /><!--                 
  --><input
    class="class-credits"
    type="number"
    min="0"
    max="6"
    placeholder="credits"
    value=${objectArray[i].class_credits}
  /><!--  
  --><select class="select" name="select">
    <option value=""></option>
    <option value="A">A</option>
    <option value="A-">A-</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="B-">B-</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="C-">C-</option>
    <option value="D+">D+</option>
    <option value="D">D</option>
    <option value="D-">D-</option>
    <option value="F">F</option></select
  ><!--
    --><button class="trash_button">
    <i class="fas fa-trash"></i>
  </button>
</div>
</form>`;
