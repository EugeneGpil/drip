#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLAST_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLAST_TQ_CSA_H_
#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {
const char* kBuiltinNameFindLast_0(compiler::CodeAssemblerState* state_);
TNode<Object> FindLastAllElements_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSTypedArray> p_array, TNode<JSReceiver> p_predicate, TNode<Object> p_thisArg, compiler::CodeAssemblerLabel* label_Bailout, compiler::TypedCodeAssemblerVariable<Number>* label_Bailout_parameter_0);
TNode<Number> Convert_Number_Number_0(compiler::CodeAssemblerState* state_, TNode<Number> p_i);
} // namespace internal
} // namespace v8
#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLAST_TQ_CSA_H_
