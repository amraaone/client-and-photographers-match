import { View, Text } from "react-native"
import { useMemo, forwardRef, useCallback } from "react"
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet"

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], [])

  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appersOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  )

  return (
    <BottomSheetModal
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      ref={ref}
      backdropComponent={renderBackDrop}
    >
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  )
})

export default BottomSheet
