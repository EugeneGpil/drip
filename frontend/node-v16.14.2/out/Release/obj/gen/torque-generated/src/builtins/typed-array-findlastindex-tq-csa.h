#ifndef V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLASTINDEX_TQ_CSA_H_
#define V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLASTINDEX_TQ_CSA_H_
#include "src/builtins/torque-csa-header-includes.h"

namespace v8 {
namespace internal {
const char* kBuiltinNameFindLastIndex_0(compiler::CodeAssemblerState* state_);
TNode<Number> FindLastIndexAllElements_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSTypedArray> p_array, TNode<JSReceiver> p_predicate, TNode<Object> p_thisArg, compiler::CodeAssemblerLabel* label_Bailout, compiler::TypedCodeAssemblerVariable<Number>* label_Bailout_parameter_0);
} // namespace internal
} // namespace v8
#endif // V8_GEN_TORQUE_GENERATED_SRC_BUILTINS_TYPED_ARRAY_FINDLASTINDEX_TQ_CSA_H_
