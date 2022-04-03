#include "src/ast/ast.h"
#include "src/builtins/builtins-array-gen.h"
#include "src/builtins/builtins-bigint-gen.h"
#include "src/builtins/builtins-collections-gen.h"
#include "src/builtins/builtins-constructor-gen.h"
#include "src/builtins/builtins-data-view-gen.h"
#include "src/builtins/builtins-iterator-gen.h"
#include "src/builtins/builtins-promise-gen.h"
#include "src/builtins/builtins-promise.h"
#include "src/builtins/builtins-proxy-gen.h"
#include "src/builtins/builtins-regexp-gen.h"
#include "src/builtins/builtins-string-gen.h"
#include "src/builtins/builtins-typed-array-gen.h"
#include "src/builtins/builtins-utils-gen.h"
#include "src/builtins/builtins-wasm-gen.h"
#include "src/builtins/builtins.h"
#include "src/codegen/code-factory.h"
#include "src/debug/debug-wasm-objects.h"
#include "src/heap/factory-inl.h"
#include "src/ic/binary-op-assembler.h"
#include "src/ic/handler-configuration-inl.h"
#include "src/objects/arguments.h"
#include "src/objects/bigint.h"
#include "src/objects/elements-kind.h"
#include "src/objects/free-space.h"
#include "src/objects/js-break-iterator.h"
#include "src/objects/js-collator.h"
#include "src/objects/js-date-time-format.h"
#include "src/objects/js-display-names.h"
#include "src/objects/js-function.h"
#include "src/objects/js-generator.h"
#include "src/objects/js-list-format.h"
#include "src/objects/js-locale.h"
#include "src/objects/js-number-format.h"
#include "src/objects/js-objects.h"
#include "src/objects/js-plural-rules.h"
#include "src/objects/js-promise.h"
#include "src/objects/js-regexp-string-iterator.h"
#include "src/objects/js-relative-time-format.h"
#include "src/objects/js-segment-iterator.h"
#include "src/objects/js-segmenter.h"
#include "src/objects/js-segments.h"
#include "src/objects/js-weak-refs.h"
#include "src/objects/objects.h"
#include "src/objects/ordered-hash-table.h"
#include "src/objects/property-array.h"
#include "src/objects/property-descriptor-object.h"
#include "src/objects/source-text-module.h"
#include "src/objects/stack-frame-info.h"
#include "src/objects/swiss-hash-table-helpers.h"
#include "src/objects/swiss-name-dictionary.h"
#include "src/objects/synthetic-module.h"
#include "src/objects/template-objects.h"
#include "src/objects/torque-defined-classes.h"
#include "src/torque/runtime-support.h"
// Required Builtins:
#include "torque-generated/src/builtins/typed-array-findlast-tq-csa.h"
#include "torque-generated/src/builtins/array-every-tq-csa.h"
#include "torque-generated/src/builtins/base-tq-csa.h"
#include "torque-generated/src/builtins/convert-tq-csa.h"
#include "torque-generated/src/builtins/frame-arguments-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-every-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-findlast-tq-csa.h"
#include "torque-generated/src/builtins/typed-array-tq-csa.h"
#include "torque-generated/src/objects/js-array-buffer-tq-csa.h"

namespace v8 {
namespace internal {
const char* kBuiltinNameFindLast_0(compiler::CodeAssemblerState* state_) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

    ca_.Bind(&block0);
  return "%TypedArray%.prototype.findLast";}

TF_BUILTIN(FindLastAllElementsDetachedContinuation, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
  TNode<Context> parameter0 = UncheckedParameter<Context>(Descriptor::kContext);
  USE(parameter0);
  TNode<JSTypedArray> parameter1 = UncheckedParameter<JSTypedArray>(Descriptor::kArray);
  USE(parameter1);
  TNode<JSReceiver> parameter2 = UncheckedParameter<JSReceiver>(Descriptor::kPredicate);
  USE(parameter2);
  TNode<Object> parameter3 = UncheckedParameter<Object>(Descriptor::kThisArg);
  USE(parameter3);
  TNode<Number> parameter4 = UncheckedParameter<Number>(Descriptor::kInitialK);
  USE(parameter4);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block3(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block1(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Number> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block3, parameter4);
  }

  TNode<Number> phi_bb3_5;
  TNode<Number> tmp0;
  TNode<BoolT> tmp1;
  if (block3.is_used()) {
    ca_.Bind(&block3, &phi_bb3_5);
    tmp0 = FromConstexpr_Number_constexpr_int31_0(state_, 0);
    tmp1 = NumberIsGreaterThanOrEqual_0(state_, TNode<Number>{phi_bb3_5}, TNode<Number>{tmp0});
    ca_.Branch(tmp1, &block1, std::vector<compiler::Node*>{phi_bb3_5}, &block2, std::vector<compiler::Node*>{phi_bb3_5});
  }

  TNode<Number> phi_bb1_5;
  TNode<Oddball> tmp2;
  TNode<Number> tmp3;
  TNode<Object> tmp4;
  TNode<BoolT> tmp5;
  if (block1.is_used()) {
    ca_.Bind(&block1, &phi_bb1_5);
    tmp2 = Undefined_0(state_);
    tmp3 = Convert_Number_Number_0(state_, TNode<Number>{phi_bb1_5});
    tmp4 = CodeStubAssembler(state_).Call(TNode<Context>{parameter0}, TNode<Object>{parameter2}, TNode<Object>{parameter3}, TNode<Object>{tmp2}, TNode<Object>{tmp3}, TNode<Object>{parameter1});
    tmp5 = ToBoolean_0(state_, TNode<Object>{tmp4});
    ca_.Branch(tmp5, &block5, std::vector<compiler::Node*>{phi_bb1_5}, &block6, std::vector<compiler::Node*>{phi_bb1_5});
  }

  TNode<Number> phi_bb5_5;
  TNode<Oddball> tmp6;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_5);
    tmp6 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp6);
  }

  TNode<Number> phi_bb6_5;
  TNode<Number> tmp7;
  TNode<Number> tmp8;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5);
    tmp7 = FromConstexpr_Number_constexpr_int31_0(state_, 1);
    tmp8 = CodeStubAssembler(state_).NumberSub(TNode<Number>{phi_bb6_5}, TNode<Number>{tmp7});
    ca_.Goto(&block3, tmp8);
  }

  TNode<Number> phi_bb2_5;
  TNode<Oddball> tmp9;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_5);
    tmp9 = Undefined_0(state_);
    CodeStubAssembler(state_).Return(tmp9);
  }
}

TNode<Object> FindLastAllElements_0(compiler::CodeAssemblerState* state_, TNode<Context> p_context, TNode<JSTypedArray> p_array, TNode<JSReceiver> p_predicate, TNode<Object> p_thisArg, compiler::CodeAssemblerLabel* label_Bailout, compiler::TypedCodeAssemblerVariable<Number>* label_Bailout_parameter_0) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray, UintPtrT> block6(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray> block4(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block14(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<JSTypedArray> block5(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<Object> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  TNode<JSTypedArray> tmp1;
  TNode<BuiltinPtr> tmp2;
  TNode<IntPtrT> tmp3;
  TNode<UintPtrT> tmp4;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    std::tie(tmp0, tmp1, tmp2) = NewAttachedJSTypedArrayWitness_0(state_, TNode<JSTypedArray>{p_array}).Flatten();
    tmp3 = FromConstexpr_intptr_constexpr_int31_0(state_, 48);
    tmp4 = CodeStubAssembler(state_).LoadReference<UintPtrT>(CodeStubAssembler::Reference{tmp1, tmp3});
    ca_.Goto(&block6, tmp1, tmp4);
  }

  TNode<JSTypedArray> phi_bb6_5;
  TNode<UintPtrT> phi_bb6_8;
  TNode<UintPtrT> tmp5;
  TNode<UintPtrT> tmp6;
  TNode<UintPtrT> tmp7;
  TNode<BoolT> tmp8;
  if (block6.is_used()) {
    ca_.Bind(&block6, &phi_bb6_5, &phi_bb6_8);
    tmp5 = FromConstexpr_uintptr_constexpr_int31_0(state_, 1);
    tmp6 = CodeStubAssembler(state_).UintPtrSub(TNode<UintPtrT>{phi_bb6_8}, TNode<UintPtrT>{tmp5});
    tmp7 = FromConstexpr_uintptr_constexpr_int31_0(state_, 0);
    tmp8 = CodeStubAssembler(state_).UintPtrGreaterThan(TNode<UintPtrT>{phi_bb6_8}, TNode<UintPtrT>{tmp7});
    ca_.Branch(tmp8, &block4, std::vector<compiler::Node*>{phi_bb6_5}, &block5, std::vector<compiler::Node*>{phi_bb6_5});
  }

  TNode<JSTypedArray> phi_bb4_5;
  TNode<IntPtrT> tmp9;
  TNode<JSArrayBuffer> tmp10;
  TNode<BoolT> tmp11;
  if (block4.is_used()) {
    ca_.Bind(&block4, &phi_bb4_5);
    tmp9 = FromConstexpr_intptr_constexpr_int31_0(state_, 24);
    tmp10 = CodeStubAssembler(state_).LoadReference<JSArrayBuffer>(CodeStubAssembler::Reference{tmp0, tmp9});
    tmp11 = IsDetachedBuffer_0(state_, TNode<JSArrayBuffer>{tmp10});
    ca_.Branch(tmp11, &block10, std::vector<compiler::Node*>{phi_bb4_5}, &block11, std::vector<compiler::Node*>{phi_bb4_5});
  }

  TNode<JSTypedArray> phi_bb10_5;
  TNode<Number> tmp12;
  if (block10.is_used()) {
    ca_.Bind(&block10, &phi_bb10_5);
    tmp12 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{tmp6});
    *label_Bailout_parameter_0 = tmp12;
    ca_.Goto(label_Bailout);
  }

  TNode<JSTypedArray> phi_bb11_5;
  TNode<JSTypedArray> tmp13;
  TNode<Numeric> tmp14;
  TNode<Number> tmp15;
  TNode<Object> tmp16;
  TNode<BoolT> tmp17;
  if (block11.is_used()) {
    ca_.Bind(&block11, &phi_bb11_5);
    tmp13 = (TNode<JSTypedArray>{tmp0});
tmp14 = TORQUE_CAST(CodeStubAssembler(state_).CallBuiltinPointer(Builtins::CallableFor(ca_.isolate(),ExampleBuiltinForTorqueFunctionPointerType(1)).descriptor(), tmp2, TNode<Object>(), tmp13, tmp6));
    tmp15 = Convert_Number_uintptr_0(state_, TNode<UintPtrT>{tmp6});
    tmp16 = CodeStubAssembler(state_).Call(TNode<Context>{p_context}, TNode<Object>{p_predicate}, TNode<Object>{p_thisArg}, TNode<Object>{tmp14}, TNode<Object>{tmp15}, TNode<Object>{tmp0});
    tmp17 = ToBoolean_0(state_, TNode<Object>{tmp16});
    ca_.Branch(tmp17, &block14, std::vector<compiler::Node*>{}, &block15, std::vector<compiler::Node*>{});
  }

  if (block14.is_used()) {
    ca_.Bind(&block14);
    ca_.Goto(&block2, tmp14);
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    ca_.Goto(&block6, tmp13, tmp6);
  }

  TNode<JSTypedArray> phi_bb5_5;
  TNode<Oddball> tmp18;
  if (block5.is_used()) {
    ca_.Bind(&block5, &phi_bb5_5);
    tmp18 = Undefined_0(state_);
    ca_.Goto(&block2, tmp18);
  }

  TNode<Object> phi_bb2_4;
  if (block2.is_used()) {
    ca_.Bind(&block2, &phi_bb2_4);
    ca_.Goto(&block16, phi_bb2_4);
  }

  TNode<Object> phi_bb16_4;
    ca_.Bind(&block16, &phi_bb16_4);
  return TNode<Object>{phi_bb16_4};
}


TF_BUILTIN(TypedArrayPrototypeFindLast, CodeStubAssembler) {
  compiler::CodeAssemblerState* state_ = state();  compiler::CodeAssembler ca_(state());
   TNode<Word32T> argc = UncheckedParameter<Word32T>(Descriptor::kJSActualArgumentsCount);
  TNode<IntPtrT> arguments_length(ChangeInt32ToIntPtr(UncheckedCast<Int32T>(argc)));
  TNode<RawPtrT> arguments_frame = UncheckedCast<RawPtrT>(LoadFramePointer());
  TorqueStructArguments torque_arguments(GetFrameArguments(arguments_frame, arguments_length));
  CodeStubArguments arguments(this, torque_arguments);
  TNode<NativeContext> parameter0 = UncheckedParameter<NativeContext>(Descriptor::kContext);
  USE(parameter0);
  TNode<Object> parameter1 = arguments.GetReceiver();
USE(parameter1);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block8(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block7(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block10(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block9(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block12(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block11(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block16(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block15(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  TNode<JSTypedArray> tmp0;
  if (block0.is_used()) {
    ca_.Bind(&block0);
    compiler::CodeAssemblerLabel label1(&ca_);
    tmp0 = Cast_JSTypedArray_1(state_, TNode<Context>{parameter0}, TNode<Object>{parameter1}, &label1);
    ca_.Goto(&block7);
    if (label1.is_used()) {
      ca_.Bind(&label1);
      ca_.Goto(&block8);
    }
  }

  if (block8.is_used()) {
    ca_.Bind(&block8);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, MessageTemplate::kNotTypedArray, kBuiltinNameFindLast_0(state_));
  }

  TNode<JSTypedArray> tmp2;
  if (block7.is_used()) {
    ca_.Bind(&block7);
    compiler::CodeAssemblerLabel label3(&ca_);
    tmp2 = EnsureAttached_0(state_, TNode<JSTypedArray>{tmp0}, &label3);
    ca_.Goto(&block9);
    if (label3.is_used()) {
      ca_.Bind(&label3);
      ca_.Goto(&block10);
    }
  }

  if (block10.is_used()) {
    ca_.Bind(&block10);
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, MessageTemplate::kDetachedOperation, kBuiltinNameFindLast_0(state_));
  }

  TNode<IntPtrT> tmp4;
  TNode<Object> tmp5;
  TNode<JSReceiver> tmp6;
  if (block9.is_used()) {
    ca_.Bind(&block9);
    tmp4 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp5 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}}, TNode<IntPtrT>{tmp4});
    compiler::CodeAssemblerLabel label7(&ca_);
    tmp6 = Cast_Callable_1(state_, TNode<Context>{parameter0}, TNode<Object>{tmp5}, &label7);
    ca_.Goto(&block11);
    if (label7.is_used()) {
      ca_.Bind(&label7);
      ca_.Goto(&block12);
    }
  }

  TNode<IntPtrT> tmp8;
  TNode<Object> tmp9;
  if (block12.is_used()) {
    ca_.Bind(&block12);
    tmp8 = FromConstexpr_intptr_constexpr_int31_0(state_, 0);
    tmp9 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}}, TNode<IntPtrT>{tmp8});
    CodeStubAssembler(state_).ThrowTypeError(TNode<Context>{parameter0}, MessageTemplate::kCalledNonCallable, TNode<Object>{tmp9});
  }

  TNode<IntPtrT> tmp10;
  TNode<Object> tmp11;
  TNode<Object> tmp12;
    compiler::TypedCodeAssemblerVariable<Number> tmp14(&ca_);
  if (block11.is_used()) {
    ca_.Bind(&block11);
    tmp10 = FromConstexpr_intptr_constexpr_int31_0(state_, 1);
    tmp11 = CodeStubAssembler(state_).GetArgumentValue(TorqueStructArguments{TNode<RawPtrT>{torque_arguments.frame}, TNode<RawPtrT>{torque_arguments.base}, TNode<IntPtrT>{torque_arguments.length}}, TNode<IntPtrT>{tmp10});
    compiler::CodeAssemblerLabel label13(&ca_);
    tmp12 = FindLastAllElements_0(state_, TNode<Context>{parameter0}, TNode<JSTypedArray>{tmp2}, TNode<JSReceiver>{tmp6}, TNode<Object>{tmp11}, &label13, &tmp14);
    ca_.Goto(&block15);
    if (label13.is_used()) {
      ca_.Bind(&label13);
      ca_.Goto(&block16);
    }
  }

  TNode<Object> tmp15;
  if (block16.is_used()) {
    ca_.Bind(&block16);
    tmp15 = ca_.CallStub<Object>(Builtins::CallableFor(ca_.isolate(), Builtin::kFindLastAllElementsDetachedContinuation), parameter0, tmp2, tmp6, tmp11, tmp14.value());
    arguments.PopAndReturn(tmp15);
  }

  if (block15.is_used()) {
    ca_.Bind(&block15);
    arguments.PopAndReturn(tmp12);
  }
}

TNode<Number> Convert_Number_Number_0(compiler::CodeAssemblerState* state_, TNode<Number> p_i) {
  compiler::CodeAssembler ca_(state_);
  compiler::CodeAssembler::SourcePositionScope pos_scope(&ca_);
  compiler::CodeAssemblerParameterizedLabel<> block0(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
  compiler::CodeAssemblerParameterizedLabel<> block2(&ca_, compiler::CodeAssemblerLabel::kNonDeferred);
    ca_.Goto(&block0);

  if (block0.is_used()) {
    ca_.Bind(&block0);
    ca_.Goto(&block2);
  }

    ca_.Bind(&block2);
  return TNode<Number>{p_i};
}


} // namespace internal
} // namespace v8
